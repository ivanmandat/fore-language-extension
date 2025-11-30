# IRdsDictionarySource.Instance

IRdsDictionarySource.Instance
-


# IRdsDictionarySource.Instance


## Синтаксис


Instance : [IRdsDictionaryInstance](../IRdsDictionaryInstance/IRdsDictionaryInstance.htm);


## Описание


Свойство Instance возвращает
 данные справочника НСИ, отображаемого в компоненте [RdsDictionaryBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/RdsDictionaryBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента RdsDictionaryBox
 с наименованием "RdsDictionaryBox1", и компонента UiRdsDictionary
 , являющегося источником данных для "RdsDictionaryBox1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    DictInst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Data: IRdsDictionaryElementData;

	Begin

	    MB := MetabaseClass.Active;

	    DictInst := RdsDictionaryBox1.Source.Instance;

	    Elements := DictInst.Elements;

	    Data := Elements.CreateElementData;

	    Data.Value(0) := MB.GenerateKey;

	    Data.Value(1) := "Элемент " + Data.Value(0);

	    Data.Value(2) := -2;

	    Elements.Insert(-2, Data);

	    RdsDictionaryBox1.RefreshElements;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан элемент
 в справочнике НСИ.


См. также:


[IRdsDictionarySource](IRdsDictionarySource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
