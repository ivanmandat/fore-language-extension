# IMetabaseCustomObjectSelSets.Add

IMetabaseCustomObjectSelSets.Add
-


# IMetabaseCustomObjectSelSets.Add


## Синтаксис


Add(Key: String; Obj: Object);


## Параметры


Key. Ключ создаваемого элемента.


Obj. Отметка измерений, которая
 будет сохранена в создаваемом элементе.


## Описание


Метод Add добавляет в коллекцию
 новый элемент и сохраняет в его метаданных передаваемую отметку измерений.


## Комментарии


В качестве значения параметра Key
 необходимо указать уникальный ключ создаваемого элемента. Если в коллекции
 уже существует элемент с указанным ключом, то будет сгенерирована исключительная
 ситуация. В качестве значения параметра Obj
 необходимо передать отметку измерений, описываемую интерфейсом [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок «Button1» и «Button2», компонента UiDimension с наименованием
 «UiDimension1» и каких-либо компонентов, используемых для изменения отметки
 справочника, подключенного к «UiDimension1». Также в репозитории должен
 быть создан объект пользовательского класса с идентификатором «SelectionStorage».
 Добавьте ссылки на системные сборки: Dimension, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CustomObj: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    WriterSelSet: IMetabaseCustomObjectSelSets;

	    DimSSFactory: IDimSelectionSetFactory;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    CustomObj := MB.ItemById("SelectionStorage").Edit As IMetabaseCustomObject;

	    Writer := CustomObj.CreateWriter;

	    //Создание отметки

	    DimSSFactory := New DimSelectionSetFactory.Create;

	    DimSS := DimSSFactory.CreateDimSelectionSet;

	    DimS := DimSS.Add(UiDimension1.DimInstance);

	    UiDimension1.Selection.CopyTo(DimS, True);

	    //Запись отметки в объект пользовательского класса

	    WriterSelSet := Writer.Selections;

	    If WriterSelSet.FindByKey("DimSelection") <> Null Then

	        WriterSelSet.RemoveByKey("DimSelection");

	    End If;

	    WriterSelSet.Add("DimSelection", DimSS);

	    //Сохраненение изменений

	    Writer.Save;

	    (CustomObj As IMetabaseObject).Save;

	End Sub Button1OnClick;


	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CustomObj: IMetabaseCustomObject;

	    Reader: IMetabaseCustomObjectReader;

	    DimSS: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    CustomObj := MB.ItemById("SelectionStorage").Edit As IMetabaseCustomObject;

	    Reader := CustomObj.CreateReader;

	    DimSS := Reader.Selections.FindByKey("DimSelection") As IDimSelectionSet;

	    UiDimension1.Selection := DimSS.Item(0);

	End Sub Button2OnClick;


При нажатии на первую кнопку в объект пользовательского класса сохраняется
 отметка справочника, связанного с компонентом «UiDimension1». При нажатии
 на вторую кнопку отметка восстанавливается из указанного объекта пользовательского
 класса и устанавливается в компоненте «UiDimension1».


См. также:


[IMetabaseCustomObjectSelSets](IMetabaseCustomObjectSelSets.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
