# DataEntryForm

DataEntryForm
-


# DataEntryForm


## Описание


Класс DataEntryForm реализует
 форму ввода.


## Комментарии


Для создания новой формы ввода создайте экземпляр класса с помощью одного
 из доступных конструкторов или вызовите статический метод [CreateInputForm](DataEntryForm.CreateInputForm.htm).
 Полученный объект приведите к интерфейсу [IDataEntryForm](../../Interface/IDataEntryForm/IDataEntryForm.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateByDataEntryForm](DataEntryForm.CreateByDataEntryForm.htm)
		 Конструктор CreateByDataEntryForm
		 создаёт экземпляр формы ввода на базе существующего объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [CreateByReport](DataEntryForm.CreateByReport.htm)
		 Конструктор CreateByReport
		 создаёт экземпляр формы ввода на основании регламентного отчёта,
		 который с ней связан.


## Статические методы класса


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateInputForm](DataEntryForm.CreateInputForm.htm)
		 Метод CreateInputForm
		 создаёт новую форму ввода и возвращает её описание.


## Свойства объекта класса, унаследованные от [IDataEntryForm](../../Interface/IDataEntryForm/IDataEntryForm.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [InputAreas](../../Interface/IDataEntryForm/IDataEntryForm.InputAreas.htm)
		 Свойство InputAreas
		 возвращает коллекцию областей ввода.


		 ![](../../Property_Image.gif)
		 [Parameters](../../Interface/IDataEntryForm/IDataEntryForm.Parameters.htm)
		 Свойство Parameters
		 возвращает коллекцию параметров формы ввода.


		 ![](../../Property_Image.gif)
		 [refreshOnEdit](../../Interface/IDataEntryForm/IDataEntryForm.refreshOnEdit.htm)
		 Свойство refreshOnEdit
		 определяет, будет ли обновляться содержимое формы ввода при открытии
		 на редактирование.


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IDataEntryForm/IDataEntryForm.Report.htm)
		 Свойство Report возвращает
		 отчёт, привязанный к форме ввода.


		 ![](../../Property_Image.gif)
		 [Sheets](../../Interface/IDataEntryForm/IDataEntryForm.Sheets.htm)
		 Свойство Sheets возвращает
		 коллекцию листов формы ввода.


## Методы объекта класса, унаследованные от [IDataEntryForm](../../Interface/IDataEntryForm/IDataEntryForm.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [_Dispose](../../Interface/IDataEntryForm/IDataEntryForm._Dispose.htm)
		 Метод _Dispose очищает
		 ссылки на объекты.


		 ![](../../Sub_Image.gif)
		 [RefreshDataSources](../../Interface/IDataEntryForm/IDataEntryForm.RefreshDataSources.htm)
		 Метод RefreshDataSources
		 переоткрывает источники данных формы ввода.


		 ![](../../Sub_Image.gif)
		 [RejectDataChanges](../../Interface/IDataEntryForm/IDataEntryForm.RejectDataChanges.htm)
		 Метод RejectDataChanges
		 отменяет изменения в данных формы ввода.


		 ![](../../Sub_Image.gif)
		 [Save](../../Interface/IDataEntryForm/IDataEntryForm.Save.htm)
		 Метод Save сохраняет
		 изменения в структуре формы ввода.


		 ![](../../Sub_Image.gif)
		 [SaveAs](../../Interface/IDataEntryForm/IDataEntryForm.SaveAs.htm)
		 Метод SaveAs создаёт
		 копию формы ввода и сохраняет её в репозитории.


		 ![](../../Sub_Image.gif)
		 [SaveDataChanges](../../Interface/IDataEntryForm/IDataEntryForm.SaveDataChanges.htm)
		 Метод SaveDataChanges
		 сохраняет изменённые данные формы ввода.


См. также:


[Классы](../DataEntryForm_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
