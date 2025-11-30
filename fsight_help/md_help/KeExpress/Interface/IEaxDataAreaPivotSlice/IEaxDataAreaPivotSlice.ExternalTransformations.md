# IEaxDataAreaPivotSlice.ExternalTransformations

IEaxDataAreaPivotSlice.ExternalTransformations
-


# IEaxDataAreaPivotSlice.ExternalTransformations


## Синтаксис


ExternalTransformations: [IEaxDataAreaExternalTransformations](../IEaxDataAreaExternalTransformations/IEaxDataAreaExternalTransformations.htm);


## Описание


Свойство ExternalTransformations
 возвращает коллекцию задач моделирования, используемых для преобразования
 данных в срезе данных.


## Комментарии


При работе с задачей моделирования результат расчёта матрицы данных
 должен напрямую передаваться в аналитическую область данных. Для этого
 используйте свойство [IEaxGrid.FillTabSheet](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.FillTabSheet.htm)
 со значением False.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, в котором имеется задача моделирования
 с идентификатором PROBLEM. Также предполагается наличие формы ввода. В
 форме ввода добавлена табличная область. Контейнер моделирования и табличная
 область построены на общем источнике данных.


Указанный ниже макрос назначен в качестве исполняемого метода для пользовательской
 кнопки формы ввода.


Добавьте ссылки на системные сборки: Express, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](DataEntryFormsCore.chm::/Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


	Public Sub AddTransform(Report: IPrxReport);

	Var

	    Mb: IMetabase;

	    Slice: IEaxDataAreaPivotSlice;

	    ETs: IEaxDataAreaExternalTransformations;

	    ET: IEaxDataAreaExternalTransformation;

	    Grid: IEaxGrid;

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    Mb := MetabaseClass.Active;

	    Slice := Report.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Grid := Report.DataArea.Views.Item(0) As IEaxGrid;

	    Grid.FillTabSheet := False;

	    // Задачи моделирования

	    ETs := Slice.ExternalTransformations;

	    ETs.Clear;

	    ET := ETs.Add;

	    // Поиск задачи в репозитории

	    Desc := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL"));

	    If Desc = Null Then

	        Debug.WriteLine("Задача не найдена");

	        Return;

	    End If;

	    // Установка задачи для работы со срезом
	 данных

	    ET.Problem := Desc.EditTemporary;

	    ET.Enabled := True;

	    Debug.WriteLine("Задача добавлена");

	End Sub AddTransform;


При выполнении макроса для табличной области данных будет добавлена
 задача моделирования, которая может использоваться для преобразования
 данных.


См. также:


[IEaxDataAreaPivotSlice](IEaxDataAreaPivotSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
