
from tkinter import *
struct=Tk()
struct.geometry("350x350") #Defining Size of GUI box
struct.title("My Search Engine") 
label=Label(struct,text="Search ",bg="azure3",fg="black",font=("Times",20,"bold"))
label.pack(side=TOP) 
struct.config(background="azure3")
text=StringVar()

def search():
    pass

label=Label(struct,text="Search Item Here",bg="azure3",fg="black",font=("Times",15,"bold"))
label.place(x=50,y=100)
enter=Entry(struct,font=("Times",10,"bold"),textvar=text,width=30,bd=2,bg="white")
enter.place(x=50,y=130)
button=Button(struct,text="Search",font=("Times",10,"bold"),width=30,bd=2,command=search)
button.place(x=50,y=170)

struct.mainloop()