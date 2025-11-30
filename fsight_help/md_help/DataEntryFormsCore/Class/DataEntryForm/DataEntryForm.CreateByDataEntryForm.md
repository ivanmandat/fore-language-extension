# DataEntryForm.CreateByDataEntryForm

DataEntryForm.CreateByDataEntryForm
-


# DataEntryForm.CreateByDataEntryForm


## Синтаксис


		CreateByDataEntryForm(descriptor: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);
		 forEdit: Boolean);


## Параметры


descriptor. Описание существующего
 объекта репозитория, являющегося формой ввода;


forEdit. Признак открытия формы
 ввода на редактирование.


## Описание


Конструктор CreateByDataEntryForm
 создаёт экземпляр формы ввода на базе существующего объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub CreateAndEditDEF(Report: IPrxReport);

		Var

		    DEFParent, DEFormDesc: IMetabaseObjectDescriptor;

		    DEForm: IDataEntryForm;

		Begin

		    DEFParent := (Report As IMetabaseObject).Parent.Parent;

		    DEFormDesc := DataEntryForm.CreateInputForm("Новая форма ввода", "NEW_DEF", DEFParent.Key);

		    DEForm := New DataEntryForm.CreateByDataEntryForm(DEFormDesc, True);

		    //...

		    // Настройка новой формы ввода

		    //...

		    DEForm.Save;

		    DEForm._Dispose;

		End Sub CreateAndEditDEF;


Данный макрос в общем виде показывает каким образом может быть создана
 и открыта на редактирование новая форма ввода.


См. также:


[DataEntryForm](DataEntryForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
