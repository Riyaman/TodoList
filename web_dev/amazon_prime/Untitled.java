class MyExeption extends Exception 
{
    {
        class Myclass 
        {
            int marks 
            public Myclass()
            {
                marks=0;
            }
            public Myclass(int x)
            {
                marks=x;
            }
            public static void main(String args[])
            {
                try 
                {
                    if (marks<0 || marks>100)
                    throw new MyExeption();
                    System.out.println("you have scored"+marks);
                }
                catch(MyExeption e)
                {
                    System.out.println("invalid marks enterred........")
                }
            }
        }
    }
}