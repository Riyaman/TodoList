from tkinter import *
root = Tk()
root.geometry("500x300")
def getvals():
    print("Accepted")
Label(root,text="python Registration Form",font="ar 15 bold").grid(row=0,column=3)
name = Label(root,text="Name")
phone = Label(root,text="phone")
Gender = Label(root,text="Gender")
emmergency = Label(root,text="emmergency")
PaymentMood = Label(root,text="Payment Mood")
name.grid(row=1,column=2)
phone.grid(row=2,column=2)
Gender.grid(row=3,column=2)
emmergency.grid(row=4,column=2)
PaymentMood.grid(row=5,column=2)
namevalue = StringVar
phonevalue = StringVar
Gendervalue = StringVar
emmergencyvalue = StringVar
PaymentMoodvalue = StringVar
checkvalue = IntVar
nameentry = Entry(root,textvariable=namevalue)
phoneentry = Entry(root,textvariable=phonevalue)
Genderentry = Entry(root,textvariable=Gendervalue)
emmergencyentry = Entry(root,textvariable=emmergencyvalue)
PaymentMoodentry = Entry(root,textvariable=PaymentMoodvalue)
nameentry.grid(row=1,column=3)
phoneentry.grid(row=2,column=3)
Genderentry.grid(row=3,column=3)
emmergencyentry.grid(row=4,column=3)
PaymentMoodentry.grid(row=5,column=3)
Checkbtn = Checkbutton(text="remember me?",variable=checkvalue)
Checkbtn.grid(row=6,column=3)
Button(text="Submit",command=getvals).grid(row=7,column=3)
root.mainloop()

