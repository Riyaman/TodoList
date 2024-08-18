from tkinter import*
import pygame
pygame.mixer.init()
class LibraryManagmentSystem:
    def __init__(self,root):
        self.root=root
        self.root.title("Library Managment System")
        self.root.geometry("1270x988")

        lbltitle=Label(self.root,text="LIBRARY MANAGMENT SYSTUM",bg="powder blue",fg="green",bd=20,relief=RIDGE,font=("times new roman",50,"bold"),padx=2,pady=6)
        lbltitle.pack(side=TOP,fill=X)

       # comMember=ttk.Combobox(DataFrameLeft,font=("times new roman",50,"bold"),width=27,state="readonly")
       # comMember["value"]=("admin Staf","Student","Lecturer")
        #comMember.grid(row=0,column=1)

        
        frame=Frame(self.root,bd=12,relief=RIDGE,padx=20,bg="powder blue")
        frame.place(x=0,y=130,width=1275,height=400)

        DataFrameLeft=LabelFrame(frame,text="Library Membership Information",bg="powder blue",fg="green",bd=12,relief=RIDGE,font=("times new roman",12,"bold"),padx=2,pady=6)
        DataFrameLeft.place(x=0,y=5,width=600,height=350)

        lbleMemebr=Label(DataFrameLeft,text="Member Type",bg="powder blue",font=("times new roman",12,"bold"))
        lbleMemebr.grid(row=0,column=0,sticky=W)

        DataFrameLeft=LabelFrame(frame,text="Book Deatails",bg="powder blue",fg="green",bd=12,relief=RIDGE,font=("times new roman",12,"bold"),padx=2,pady=6)
        DataFrameLeft.place(x=610,y=5,width=600,height=350)


        FrameButton=Frame(self.root,bd=12,relief=RIDGE,padx=20,bg="powder blue")
        FrameButton.place(x=0,y=530,width=1275,height=70)


        FrameDetails=Frame(self.root,bd=12,relief=RIDGE,padx=20,bg="powder blue")
        FrameDetails.place(x=0,y=600,width=1275,height=195)

if __name__=="__main__":
    root=Tk()
    obj=LibraryManagmentSystem(root)
    root.mainloop()
    