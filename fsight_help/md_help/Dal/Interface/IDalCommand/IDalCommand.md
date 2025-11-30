# IDalCommand

IDalCommand
-


# IDalCommand


## Описание


Интерфейс IDalCommand предназначен
 для работы с командой, которая осуществляет выполнение SQL-запросов к
 базе данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Connection](IDalCommand.Connection.htm)
		 Свойство Connection
		 возвращает текущее соединение с базой данных.


		 ![](../../Property_Image.gif)
		 [CurrentParamsRow](IDalCommand.CurrentParamsRow.htm)
		 Свойство CurrentParamsRow
		 возвращает индекс текущего набора параметров.


		 ![](../../Property_Image.gif)
		 [InUse](IDalCommand.InUse.htm)
		 Свойство InUse возвращает
		 признак, выполняется ли в данный момент SQL-запрос на сервере
		 БД.


		 ![](../../Property_Image.gif)
		 [MaxParamsRows](IDalCommand.MaxParamsRows.htm)
		 Свойство MaxParamsRows
		 определяет максимальное количество обрабатываемых наборов значений
		 параметров.


		 ![](../../Property_Image.gif)
		 [Params](IDalCommand.Params.htm)
		 Свойство Params возвращает
		 параметры SQL-запроса.


		 ![](../../Property_Image.gif)
		 [SQL](IDalCommand.SQL.htm)
		 Свойство SQL определяет
		 строку (SQL-запрос), которую необходимо выполнить на сервере БД.


		 ![](../../Property_Image.gif)
		 [Type](IDalCommand.Type.htm)
		 Свойство Type определяет
		 тип выполняемой команды.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Close](IDalCommand.Close.htm)
		 Метод Close закрывает
		 SQL-запрос и освобождает ресурсы операционной системы.


		 ![](../../Sub_Image.gif)
		 [CreateCursor](IDalCommand.CreateCursor.htm)
		 Метод CreateCursor
		 создает курсор, позволяющий перемещаться по данным, полученным
		 посредством выполнения SQL-запроса к БД.


		 ![](../../Sub_Image.gif)
		 [DescribeCursor](IDalCommand.DescribeCursor.htm)
		 Метод DescribeCursor
		 создает курсор, содержащий только поля данных.


		 ![](../../Sub_Image.gif)
		 [Execute](IDalCommand.Execute.htm)
		 Метод Execute осуществляет
		 выполнение команды на сервере БД и возвращает число обработанных
		 записей.


		 ![](../../Sub_Image.gif)
		 [ExecuteWithoutLast](IDalCommand.ExecuteWithoutLast.htm)
		 Метод ExecuteWithoutLast
		 выполняет команду со всеми наборами параметров, кроме последнего,
		 и возвращает число обработанных записей.


		 ![](../../Sub_Image.gif)
		 [NextParamsRow](IDalCommand.NextParamsRow.htm)
		 Метод NextParamsRow
		 сохраняет текущий набор параметров и переходит к следующему.


		 ![](../../Sub_Image.gif)
		 [Parse](IDalCommand.Parse.htm)
		 Метод Parse анализирует
		 запрос и выявляет в нём наличие параметров.


		 ![](../../Sub_Image.gif)
		 [Prepare](IDalCommand.Prepare.htm)
		 Метод Prepare подготавливает
		 команду для многократного использования на сервере БД.


		 ![](../../Sub_Image.gif)
		 [Unprepare](IDalCommand.Unprepare.htm)
		 Метод Unprepare аннулирует
		 действие метода [Prepare](IDalCommand.Prepare.htm).
		 Метод находится в стадии разработки.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
