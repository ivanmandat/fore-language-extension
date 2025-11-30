# IMetabaseCustomObjectSelSets.AddWithOwner

IMetabaseCustomObjectSelSets.AddWithOwner
-


# IMetabaseCustomObjectSelSets.AddWithOwner


## Синтаксис


AddWithOwner(Key: String; Obj: Object; Owner: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm));


## Параметры


Key. Ключ создаваемого элемента.


Obj. Отметка измерений, которая
 будет сохранена в создаваемом элементе.


Owner. Описание объекта репозитория,
 с которым будет связана отметка.


## Описание


Метод AddWithOwner добавляет
 в коллекцию новый элемент и сохраняет в его метаданных передаваемую отметку
 измерений, с привязкой к указанному владельцу отметки.


## Комментарии


В качестве значения параметра Key
 необходимо указать уникальный ключ создаваемого элемента. Если в коллекции
 уже существует элемент с указанным ключом, то будет сгенерирована исключительная
 ситуация. В качестве значения параметра Obj
 необходимо передать отметку измерений, описываемую интерфейсом [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm).
 В параметре Owner указывается
 описание объекта, с которым связана отметка, например, описание куба или
 базы данных временных рядов. Метод может использоваться, если в коллекции
 сохраняются однотипные отметки, созданные для различных объектов репозитория.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок «Button1» и «Button2» компонента MetaAttributesBreadcrumb
 с наименованием «MetaAttributesBreadcrumb1», связанного с какой-либо базой
 данных временных рядов. Также в репозитории должен быть создан объект
 пользовательского класса с идентификатором «SelectionStorage». Добавьте
 ссылки на системные сборки: Cubes, Dimension, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CustomObj: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    WriterSelSet: IMetabaseCustomObjectSelSets;

	Begin

	    MB := MetabaseClass.Active;

	    CustomObj := MB.ItemById("SelectionStorage").Edit As IMetabaseCustomObject;

	    Writer := CustomObj.CreateWriter;

	    WriterSelSet := Writer.Selections;

	    If WriterSelSet.FindByKey("MetaSelecetion") <> Null Then

	        WriterSelSet.RemoveByKey("MetaSelecetion");

	    End If;

	    WriterSelSet.AddWithOwner("MetaSelecetion",

	        MetaAttributesBreadcrumb1.GetSelectionSet,

	        (MetaAttributesBreadcrumb1.Rubricator.Rubricator As IMetabaseObjectDescriptor));

	    Writer.Save;

	    (CustomObj As IMetabaseObject).Save;

	End Sub Button1OnClick;


	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CustomObj: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	    ReaderSelSet: IMetabaseCustomObjectSelSets;

	    DimSS: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    CustomObj := MB.ItemById("SelectionStorage").Edit As IMetabaseCustomObject;

	    Reader := CustomObj.CreateReader;

	    ReaderSelSet := Reader.Selections;

	    DimSS := ReaderSelSet.FindByKey("MetaSelecetion") As IDimSelectionSet;

	    MetaAttributesBreadcrumb1.SetSelectionSet(DimSS);

	    Text := ReaderSelSet.OwnerByKey("MetaSelecetion").Name;

	End Sub Button2OnClick;


При нажатии на первую кнопку в объект пользовательского класса сохраняется
 отметка показателей, установленная в компоненте «MetaAttributesBreadcrumb1».
 При нажатии на вторую кнопку отметка восстанавливается из указанного объекта
 пользовательского класса и устанавливается в компоненте «MetaAttributesBreadcrumb1».


См. также:


[IMetabaseCustomObjectSelSets](IMetabaseCustomObjectSelSets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
