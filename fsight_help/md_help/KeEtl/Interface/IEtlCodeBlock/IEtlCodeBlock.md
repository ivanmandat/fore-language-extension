# IEtlCodeBlock

IEtlCodeBlock
-


# IEtlCodeBlock


Сборка: Etl;


## Описание


Интерфейс IEtlCodeBlock содержит
 свойства и методы объекта задачи ETL - Процедура.


## Иерархия наследования


           [IEtlObject](../IEtlObject/IEtlObject.htm)


           IEtlCodeBlock


## Комментарии


Процедура позволяет запускать
 на выполнение какие-либо процедуры/функции, реализованные в Fore-объектах
 среды разработки. При использовании в задаче ETL процедур будет игнорироваться
 [пакетная обработка данных](../IEtlTask/IEtlTask.PartialFetch.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Module](IEtlCodeBlock.Module.htm)
		 Свойство Module определяет
		 описание объекта среды разработки, содержащего реализацию выполняемой
		 процедуры/функции.


		 ![](../../Property_Image.gif)
		 [Params](IEtlCodeBlock.Params.htm)
		 Свойство Params возвращает
		 коллекцию параметров выполняемой процедуры/функции.


		 ![](../../Property_Image.gif)
		 [PlainInput](IEtlCodeBlock.PlainInput.htm)
		 Свойство PlainInput
		 возвращает параметры входа объекта «Процедура».


		 ![](../../Property_Image.gif)
		 [PlainOutput](IEtlCodeBlock.PlainOutput.htm)
		 Свойство PlainOutput
		 возвращает параметры выхода объекта «Процедура».


		 ![](../../Property_Image.gif)
		 [Procedure](IEtlCodeBlock.Procedure.htm)
		 Свойство Procedure
		 определяет наименование выполняемой процедуры/функции.


## Свойства, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConnCompId](../IEtlObject/IEtlObject.ConnCompId.htm)
		 Свойство ConnCompId
		 определяет индекс компоненты связности объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Description](../IEtlObject/IEtlObject.Description.htm)
		 Свойство Description
		 определяет описание (примечание) объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Id](../IEtlObject/IEtlObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [InputType](../IEtlObject/IEtlObject.InputType.htm)
		 Свойство InputType
		 возвращает тип входа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [IsActive](../IEtlObject/IEtlObject.IsActive.htm)
		 Свойство IsActive возвращает
		 признак включения объекта в задачу ETL.


		 ![](../../Property_Image.gif)
		 [Name](../IEtlObject/IEtlObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectType](../IEtlObject/IEtlObject.ObjectType.htm)
		 Свойство ObjectType
		 возвращает тип объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectTypeName](../IEtlObject/IEtlObject.ObjectTypeName.htm)
		 Свойство ObjectTypeName
		 возвращает название типа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [OutputType](../IEtlObject/IEtlObject.OutputType.htm)
		 Свойство OutputType
		 возвращает тип выхода объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Task](../IEtlObject/IEtlObject.Task.htm)
		 Свойство Task возвращает
		 задачу ETL, в которой создан объект.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Check](IEtlCodeBlock.Check.htm)
		 Метод Check проверяет,
		 заданы ли для текущего объекта необходимые параметры.


		 ![](../../Sub_Image.gif)
		 [Edit](IEtlCodeBlock.Edit.htm)
		 Метод Edit создает
		 копию объекта для редактирования.


		 ![](../../Sub_Image.gif)
		 [Save](IEtlCodeBlock.Save.htm)
		 Метод Save сохраняет
		 изменения объекта.


## Методы, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetControlledObjects](../IEtlObject/IEtlObject.GetControlledObjects.htm)
		 Метод GetControlledObjects
		 возвращает коллекцию описаний объектов репозитория, управляемых
		 текущим объектом задачи ETL.


		 ![](../../Sub_Image.gif)
		 [Remove](../IEtlObject/IEtlObject.Remove.htm)
		 Метод Remove удаляет
		 объект задачи ETL.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
