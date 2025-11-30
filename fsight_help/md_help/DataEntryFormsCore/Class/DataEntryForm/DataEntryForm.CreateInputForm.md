# DataEntryForm.CreateInputForm

DataEntryForm.CreateInputForm
-


# DataEntryForm.CreateInputForm


## Синтаксис


		CreateInputForm(name: String; id: String;
		 parentKey: Integer): [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


name. Наименование создаваемой
 формы ввода;


id. Идентификатор новой формы
 ввода;


parentKey. Ключ родительского
 объекта, в рамках которого будет создана формы ввода.


## Описание


Метод CreateInputForm создаёт
 новую форму ввода и возвращает её описание.


## Комментарии


Метод создаёт пустую форму ввода. Для дальнейшей работы откройте полученную
 форму ввода на редактирование с помощью метода [IMetabaseObjectDescriptor.Edit](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm)
 и приведите к интерфейсу [IDataEntryForm](../../Interface/IDataEntryForm/IDataEntryForm.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода,
 для которой указанный макрос назначен в качестве исполняемого метода для
 пользовательской кнопки.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report. Также
 добавьте ссылки на сборки, которые [необходимы](../../Intro/DataEntryFormsCore_Intro.htm#link_assembly)
 для работы с формами ввода.


					Public Sub CreateDEF(Report: IPrxReport);

		Var

		    DEFParent, DEFormDesc: IMetabaseObjectDescriptor;

		Begin

		    DEFParent := (Report As IMetabaseObject).Parent.Parent;

		    DEFormDesc := DataEntryForm.CreateInputForm("Новая форма ввода", "NEW_DEF", DEFParent.Key);

		End Sub CreateDEF;


При выполнении макроса будет создана новая форма ввода. Форма ввода
 будет сохранена в той же папке, в которой расположена текущая форма ввода,
 в которой используется пользовательская кнопка.


См. также:


[DataEntryForm](DataEntryForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
