# ForeMethod

ForeMethod
-


# ForeMethod


Сборка: Fore;


## Описание


Класс ForeMethod реализует пользовательский
 метод.


## Комментарии


Класс используется для динамического создания пользовательского метода,
 в основе которого лежит какая-либо процедура/функция на языке Fore. После
 создания экземпляра класса ForeMethod,
 задайте свойства [Assembly](../../Interface/IBaseMethod/IBaseMethod.Assembly.htm) и [Method](../../Interface/IBaseMethod/IBaseMethod.Method.htm). Полученный пользовательский
 метод может быть запущен с помощью метода [Invoke](../../Interface/IBaseMethod/IBaseMethod.Invoke.htm)
 или использован для выполнения в [отдельном
 потоке](../ForeThread/ForeThread.Create.htm) параллельно основному приложению.


## Свойства объекта класса, унаследованные от [IForeMethod](../../Interface/IForeMethod/IForeMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Params](../../Interface/IForeMethod/IForeMethod.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/IForeMethod/IForeMethod.Type.htm)
		 Свойство Type определяет
		 тип пользовательского метода.


## Свойства объекта класса, унаследованные от [IBaseMethod](../../Interface/IBaseMethod/IBaseMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Assembly](../../Interface/IBaseMethod/IBaseMethod.Assembly.htm)
		 Свойство Assembly определяет
		 идентификатор модуля, содержащего пользовательский метод.


		 ![](../../Property_Image.gif)
		 [Category](../../Interface/IBaseMethod/IBaseMethod.Category.htm)
		 Свойство Category определяет
		 категорию пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Description](../../Interface/IBaseMethod/IBaseMethod.Description.htm)
		 Свойство Description
		 определяет описание пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Key](../../Interface/IBaseMethod/IBaseMethod.Key.htm)
		 Свойство Key возвращает
		 ключ пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Method](../../Interface/IBaseMethod/IBaseMethod.Method.htm)
		 Свойство Method определяет
		 уникальный идентификатор пользовательского метода.


		 ![](../../Property_Image.gif)
		 [Name](../../Interface/IBaseMethod/IBaseMethod.Name.htm)
		 Свойство Name определяет
		 наименование пользовательского метода.


		 ![](../../Property_Image.gif)
		 [ResultType](../../Interface/IBaseMethod/IBaseMethod.ResultType.htm)
		 Свойство ResultType
		 определяет тип данных результата, возвращаемого пользовательским
		 методом.


		 ![](../../Property_Image.gif)
		 [Tag](../../Interface/IBaseMethod/IBaseMethod.Tag.htm)
		 Свойство Tag определяет
		 любые данные, связанные с методом.


## Методы объекта класса, унаследованные от [IBaseMethod](../../Interface/IBaseMethod/IBaseMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Bind](../../Interface/IBaseMethod/IBaseMethod.Bind.htm)
		 Метод Bind инициализирует
		 пользовательский метод.


		 ![](../../Sub_Image.gif)
		 [Invoke](../../Interface/IBaseMethod/IBaseMethod.Invoke.htm)
		 Метод Invoke выполняет
		 пользовательский метод.


См. также:


[Классы
 сборки Fore](../KeFore_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
