import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from '@/hooks/use-toast'
import { Separator } from '@/components/ui/separator'
import { useNavigate } from 'react-router-dom'

type AuthFormProps = {
  isLogin: boolean
}

export default function AuthPage({ isLogin }: AuthFormProps) {
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      upiTransactionId: '',
      newsletter: false,
    },
  })

  const handleSubmit = form.handleSubmit(async (values) => {
    try {
      const { data, error } = isLogin
        ? await supabase.auth.signInWithPassword(values)
        : await supabase.auth.signUp(values)

      if (!isLogin && data?.user) {
        await supabase
          .from('user_profiles')
          .insert({
            user_id: data.user.id,
            full_name: values.fullName,
            upi_transaction_id: values.upiTransactionId,
            newsletter_subscription: values.newsletter
          });
      }

      if (error) throw error

      toast({
        title: isLogin ? 'Welcome back!' : 'Account created!',
        description: isLogin ? 'You have successfully logged in' : 'Please check your email to confirm your account',
      })

      navigate('/')
    } catch (error) {
      toast({
        title: 'Authentication failed',
        description: error.error_description || error.message,
        variant: 'destructive',
      })
    }
  })

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      toast({
        title: 'Social login failed',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  const handlePasswordReset = async () => {
    const email = form.getValues('email')
    if (!email) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address first',
        variant: 'destructive',
      })
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) {
      toast({
        title: 'Password reset failed',
        description: error.message,
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Reset email sent',
        description: 'Check your email for password reset instructions',
      })
    }
  }

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          {!isLogin && (
            <p className="text-muted-foreground mb-6">
              After payment, enter your UPI Transaction/Reference ID below
            </p>
          )}
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isLogin && (
            <>
              <FormField
                control={form.control}
                name="upiTransactionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UPI Transaction ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      Subscribe to newsletter
                    </FormLabel>
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isLogin && (
            <>
              <FormField
                control={form.control}
                name="upiTransactionId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UPI Transaction ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0">
                      Subscribe to newsletter
                    </FormLabel>
                  </FormItem>
                )}
              />
            </>
          )}

          <Button type="submit" className="w-full">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
      </Form>

      <Separator className="my-8" />

      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleSocialLogin('google')}
        >
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => handleSocialLogin('github')}
        >
          Continue with GitHub
        </Button>
      </div>

      <div className="mt-6 text-center text-sm">
        {isLogin ? (
          <>
            Forgot password?{' '}
            <button
              type="button"
              onClick={handlePasswordReset}
              className="text-primary underline"
            >
              Reset here
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-primary underline"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  )
}