# IView

IView
-


# IView


Сборка: Db;


## Описание


Интерфейс IView содержит свойства
 и методы объекта репозитория - [Представление](UiNavObj.chm::/conception/UiDb_relational_conception.htm).


## Иерархия наследования


IView


## Комментарии


При создании нового представления для его корректной работы необходимо,
 чтобы в настройках был задан следующий минимальный набор свойств:


	- [Database](IView.Database.htm);


	- [NativeName](IView.NativeName.htm);


	- [Sql](IView.Sql.htm) или [SQLText](IView.SQLText.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](IView.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой хранится представление.


		 ![](../../Property_Image.gif)
		 [ForceCreate](IView.ForceCreate.htm)
		 Свойство ForceCreate
		 определяет разрешение создания некорректного представления.


		 ![](../../Property_Image.gif)
		 [NativeName](IView.NativeName.htm)
		 Свойство NativeName
		 определяет физическое имя представления в базе данных.


		 ![](../../Property_Image.gif)
		 [Sql](IView.Sql.htm)
		 Свойство Sql определяет
		 SQL-запрос представления.


		 ![](../../Property_Image.gif)
		 [SQLText](IView.SQLText.htm)
		 Свойство SQLText определяет
		 SQL-запрос представления, для определенного драйвера базы данных.


		 ![](../../Property_Image.gif)
		 [TableCreate](IView.TableCreate.htm)
		 Свойство TableCreate
		 определяет, будет ли представление сохраняемым.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AlterView](IView.AlterView.htm)
		 Метод AlterView осуществляет
		 обновление структуры указанного представления на сервере БД, в
		 соответствии со структурой текущего представления.


		 ![](../../Sub_Image.gif)
		 [ClearSqlText](IView.ClearSqlText.htm)
		 Метод ClearSqlText
		 осуществляет очистку текста SQL-запроса представления.


		 ![](../../Sub_Image.gif)
		 [CreateView](IView.CreateView.htm)
		 Метод CreateView осуществляет
		 создание представления в базе данных на основе имеющихся метаданных.


		 ![](../../Sub_Image.gif)
		 [DropView](IView.DropView.htm)
		 Метод DropView осуществляет
		 удаление представления из базы данных.


		 ![](../../Sub_Image.gif)
		 [RecreateView](IView.RecreateView.htm)
		 Метод RecreateView
		 осуществляет пересоздание представления на сервере БД.


		 ![](../../Sub_Image.gif)
		 [UpdateData](IView.UpdateData.htm)
		 Метод UpdateData осуществляет
		 обновление данных представления.


		 ![](../../Sub_Image.gif)
		 [UpdateView](IView.UpdateView.htm)
		 Метод UpdateView осуществляет
		 обновление представления в базе данных.


См.также:


[Интерфейсы
 сборки Db](../KeDb_Interface.htm) | [IDatasetModel](../IDatasetModel/IDatasetModel.htm)
 | [IDatasetInstance](../IDatasetInstance/IDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
