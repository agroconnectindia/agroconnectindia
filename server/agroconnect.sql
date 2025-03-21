BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Crops" (
	"No"	INTEGER,
	"Name"	TEXT,
	"Water"	INTEGER,
	"Sunlight"	INTEGER,
	"id"	TEXT,
	PRIMARY KEY("No" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Milkdata" (
	"Sr_no"	INTEGER,
	"Date"	TEXT NOT NULL,
	"Quantity"	REAL NOT NULL,
	"Rate"	REAL NOT NULL,
	"Amount"	REAL NOT NULL,
	PRIMARY KEY("Sr_no" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Poultryfarm" (
	"Srno"	INTEGER,
	"Date"	INTEGER,
	"Quantity"	INTEGER,
	"Rate"	INTEGER,
	"Amount"	INTEGER,
	PRIMARY KEY("Srno" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Userinfo" (
	"Name"	TEXT,
	"Email"	TEXT,
	"Phoneno"	INTEGER,
	"City"	TEXT,
	"State"	TEXT,
	"Language"	INTEGER,
	"Soiltype"	TEXT,
	"Currentcrop"	TEXT,
	"Harvesttime"	INTEGER,
	"Fertillizerfrequency"	INTEGER,
	"Ureafrequency"	INTEGER
);
CREATE TABLE IF NOT EXISTS "fertilizers" (
	"Crop"	TEXT,
	"Fertilizers"	TEXT
);
CREATE TABLE IF NOT EXISTS "login" (
	"srno"	INTEGER,
	"phonenumber"	NUMERIC,
	"email"	TEXT,
	PRIMARY KEY("srno" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "pesticides" (
	"id"	INTEGER,
	"application_date"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "seeds" (
	"Crops"	TEXT,
	"Seeds"	TEXT
);
CREATE TABLE IF NOT EXISTS "urea" (
	"id"	INTEGER,
	"application_date"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "Crops" ("No","Name","Water","Sunlight","id") VALUES (1,'Cotton',91,90,'cotton'),
 (2,'Soyabean',93,92,'soyabean'),
 (3,'Jawar',90,92,'jawar'),
 (4,'Maize',94,93,'maize'),
 (5,'Moong',35,91,'moong'),
 (6,'Jawas',15,18,'jawas'),
 (7,'Mustard',NULL,NULL,'mustard'),
 (8,'Wheat',55,48,'wheat'),
 (9,'Rice',98,92,'rice'),
 (10,'Chana',18,19,'chana'),
 (11,'Groundnut',NULL,NULL,'groundnut'),
 (12,'Tomato',58,54,'tomato'),
 (13,'Onion',NULL,NULL,'onion'),
 (14,'Capsicum',NULL,NULL,'capsicum'),
 (15,'Watermelon',96,92,'watermelon'),
 (16,'Papaya',NULL,NULL,'papaya'),
 (17,'Custard Apple',NULL,NULL,'custard apple');
INSERT INTO "Milkdata" ("Sr_no","Date","Quantity","Rate","Amount") VALUES (1,'12-01-2025',18.0,45.0,810.0),
 (8,'2025-01-17',14.0,45.0,630.0),
 (9,'2025-01-25',10.0,42.0,420.0),
 (10,'2025-02-17',15.0,40.0,600.0),
 (11,'2025-02-14',45.0,40.0,1800.0),
 (12,'2025-02-08',20.0,35.0,700.0),
 (13,'2025-02-28',45.0,6.0,270.0),
 (14,'2025-02-06',45.0,40.0,1800.0),
 (15,'2023-07-12',12.0,38.0,456.0),
 (16,'2025-02-13',45.0,40.0,1800.0),
 (17,'2025-02-01',45.0,38.0,1710.0),
 (18,'2025-02-13',20.0,70.0,1400.0),
 (19,'2025-02-13',41.0,40.0,1640.0),
 (20,'2023-06-07',45.0,62.0,2790.0),
 (21,'2022-06-09',45.0,38.0,1710.0),
 (22,'2025-02-03',45.0,30.0,1350.0),
 (23,'2025-02-27',99.0,40.0,3960.0),
 (24,'2025-02-05',45.0,40.0,1800.0),
 (25,'2025-02-12',45.0,42.0,1890.0),
 (26,'2024-11-05',48.0,42.0,2016.0),
 (27,'2025-02-16',15.0,42.0,630.0),
 (28,'2025-02-17',40.0,42.0,1680.0);
INSERT INTO "Poultryfarm" ("Srno","Date","Quantity","Rate","Amount") VALUES (1,'01-01-2025',45,6,270),
 (2,'02-01-2025',38,5,190),
 (3,'03-01-2025',48,5,240),
 (4,'04-01-2025',41,6,246),
 (5,'05-01-2025',46,5,230),
 (6,'06-01-2025',35,7,245),
 (7,'07-01-2025',45,6,270),
 (8,'08-01-2025',50,5,250),
 (9,'09-01-2025',35,5,175),
 (10,'10-01-2025',36,7,252),
 (11,'11-01-2025',41,6,246),
 (12,'12-01-2025',40,6,240),
 (13,'13-01-2025',49,7,343),
 (14,'14-01-2025',44,6,264),
 (15,'15-01-2025',47,5,235),
 (17,'2025-02-01',20,6,120),
 (18,'2025-01-31',15,5,75),
 (19,'2025-02-16',20,5,100),
 (20,'2025-02-19',15,5,75),
 (21,'2025-02-20',16,5,80),
 (22,'2025-02-15',5,6,30),
 (23,'2025-02-19',45,6,270),
 (24,'2025-02-21',99,6,594),
 (25,'2025-02-12',42,6,252);
INSERT INTO "Userinfo" ("Name","Email","Phoneno","City","State","Language","Soiltype","Currentcrop","Harvesttime","Fertillizerfrequency","Ureafrequency") VALUES ('Samarth','samarthnaikwade720@gmail.com',9322756651,'Beed','Maharashtra','Marathi','Black','rice',2,2,2),
 ('Rahul','samarthnaikwade720@gmail.com',9322756651,'Beed','Maharashtra','Marathi','Black','Wheat',2,2,2),
 ('Prajwal Dhage','psdhage1@gmail.com',8010617505,'Nagpur','Maharashtra','Marathi','Black','Wheat',2,2,2),
 ('Samarth Prakash Naikwade','samarthnaikwade720@gmail.com',9322756651,'Pune','Maharashtra','Marathi','Black','Wheat',2,2,2),
 ('Samarth Prakash Naikwade','samarthnaikwade720@gmail.com',9322756651,'Pune','Maharashtra','Marathi','Black','Wheat',2,2,2);
INSERT INTO "fertilizers" ("Crop","Fertilizers") VALUES ('Cotton','Cotton fertilizer'),
 ('Soyabean','Soyabean Special'),
 ('Maize','Corn Kynoch OEMF'),
 ('Moong','Moong Safe Harvest'),
 ('Mustard','Mustard Cake'),
 ('Wheat','Wheat Special'),
 ('Rice','Rice Rizamica'),
 ('Chana','ChanaGrow'),
 ('Groundnut','Groundnut Plantic'),
 ('Tomato','Fertilizer Tomato Booster'),
 ('Onion','Fertilizer Onion Special'),
 ('Capsicum','Fertilizer Capsicum Food'),
 ('Watermelon','Watermelon Fertilizer'),
 ('Papaya','Fertilizer NPK Papaya Growth'),
 ('Custard Apple','Fertilizer Custard Apple Erwon');
INSERT INTO "login" ("srno","phonenumber","email") VALUES (1,963215478,'samarthnaikwade720@gmail.com'),
 (2,322756651,'samarthnaikwade720@gmail.com'),
 (3,9874563210,'samarth@2006.com'),
 (4,8523697412,'psdhage@68.com'),
 (5,9632587412,'random@gmial.com'),
 (6,9632563256,'samarth@2006.com'),
 (7,9632563256,'samarth@2006.com'),
 (8,9632587412,'hellotest@outlook.com'),
 (9,9322756651,'samarthnaikwade720@gmail.com'),
 (10,9322756651,'samarthnaikwade720@gmail.com'),
 (11,9322756651,'samarthnaikwade720@gmail.com'),
 (12,8010617505,'samarthnaikwade720@gmail.com'),
 (13,8523697412,'tejasmahajan077@gmail.com'),
 (14,123456789,'ghnhgf@gmail.com'),
 (15,8523697412,'tejasmahajan077@gmail.com'),
 (16,8523697412,'tejasmahajan077@gmail.com'),
 (17,9322756651,'samarthnaikwade720@gmail.com'),
 (18,9322756651,'samarthnaikwade720@gmail.com'),
 (19,9322756651,'samarthspam72@gmail.com'),
 (20,9322756651,'samarthnaikwade720@gmail.com'),
 (21,9322847345,'dhange78@gmail.com'),
 (22,9322756651,'samarthspam72@gmail.com');
INSERT INTO "pesticides" ("id","application_date") VALUES (5,'2025-02-12'),
 (6,'2025-02-24');
INSERT INTO "seeds" ("Crops","Seeds") VALUES ('Cotton','SRW-5142'),
 ('Wheat','DSC-51'),
 ('Soyabean','KDS 726'),
 ('Soyabean','SOYABEAN SPECIAL '),
 ('Jawar','Jawar Roagro 8340'),
 ('Jawar','Jawar DF Vikram 33'),
 ('Maize','Corn PAC 751'),
 ('Maize','Corn ISP 175'),
 ('Moong','Moong SVM-66'),
 ('Moong','Moong GRH-335'),
 ('Jawas','Flaxseeds Organika'),
 ('Jawas','Flaxseeds organic Tattva'),
 ('Mustard','Mustard VNR 502'),
 ('Mustard','Mustard Cake'),
 ('Rice','Rice PR-126'),
 ('Rice','Rice ABM-581'),
 ('Chana','Chana Bombay Super PKV-2'),
 ('Chana','Chana Bombay Super jaki-9218'),
 ('Groundnut','Groundnut Swaraj-44'),
 ('Groundnut','Groundnut Bombay Super GG-20'),
 ('Tomato','Tomato Syngenta Heemsohna'),
 ('Tomato','Sarpan''s Tomato'),
 ('Onion','Onion Virat '),
 ('Onion','Onion Shine'),
 ('Capsicum','Green Pepper Seminis SV1865PB'),
 ('Capsicum','Green Pepper Aristotle'),
 ('Watermelon','Watermelon Mitthu'),
 ('Watermelon','Watermelon Muskan plus'),
 ('Papaya','F1 Papaya'),
 ('Papaya','Sarpan Papaya'),
 ('Custard Apple','Custard Apple '),
 ('Wheat','Wheat SRW-5121'),
 ('Cotton','Cotton Goldi-333');
COMMIT;
