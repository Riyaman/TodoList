import pandas as pd
import datetime

def sendEmail(to, sub, msg):
    print(f"Email to {to} sent with subject: {sub} and message {msg}")
    

if __name__=='__main__':
    df = pd.read_excel("bir.xlsx")
    #print(df)
    today = datetime.datetime.now().strftime("%d-%m")
    yearNow = datetime.datetime.now().strftime("%Y")
    #print(today)
    writInd = []
    for index, item in df.iterrows():
        print(index, item['Brithday'])
        bday = item['Brithday'].strftime("%d-%m")
        print(bday)
        if (today == bday) and yearNow not in item['Year']:
            sendEmail(item['Email'],"Happy Birthday",item['Dilogus'])
            writInd.append(index)
        #else:
        #    break
