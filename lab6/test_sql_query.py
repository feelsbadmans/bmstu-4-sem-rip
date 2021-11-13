import MySQLdb

db = MySQLdb.connect(
    host="localhost",
    user="dbuser",
    passwd="123",
    db="first_db"
)

c=db.cursor()
c.execute("INSERT INTO Processor (title, numb_cores, freq, price) VALUES (%s, %s, %s, %s);", ('AMD FX 8300', 8, 3500, 8000))
db.commit()
c.close()
db.close()