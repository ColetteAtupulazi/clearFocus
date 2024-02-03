import mysql.connector

database_name = 'clear_focus_family'
connect = mysql.connector.connect(host='localhost', password='cocopass',user='root', database='clear_focus_family')
if connect.is_connected():
    print("connection established...")
    connect.close()  # Close the connection if it's no longer needed
else:
    print("Connection failed.")