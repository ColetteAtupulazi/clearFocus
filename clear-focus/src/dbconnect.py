import mysql.connector
from mysql.connector import errorcode

try:
    # Establish the connection
    cnn = mysql.connector.connect(
        user='root',
        password='cocopass',
        host='localhost',
        database='clear_focus_family'
    )

    # Create a cursor object to execute SQL queries
    cursor = cnn.cursor()

    # Execute a SELECT query to retrieve data from the table
    query = "SELECT * FROM family_mem;"
    cursor.execute(query)

    # Fetch all rows from the result set
    rows = cursor.fetchall()

    # Print the retrieved data
    for row in rows:
        print(row)

except mysql.connector.Error as e:
    if e.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Error: Wrong username or password")
    elif e.errno == errorcode.ER_BAD_DB_ERROR:
        print("Error: Database doesn't exist")
    else:
        print(e)

finally:
    # Close the cursor and connection
    if 'cursor' in locals() and cursor is not None:
        cursor.close()
    if 'cnn' in locals() and cnn.is_connected():
        cnn.close()
        print("MySQL connection closed")
