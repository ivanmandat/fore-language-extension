# IRdsDictionaryBox.RefreshElements

IRdsDictionaryBox.RefreshElements
-


# IRdsDictionaryBox.RefreshElements


## Синтаксис


RefreshElements;


## Описание


Метод RefreshElements осуществляет обновление дерева элементов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента RdsDictionaryBox с наименованием «RdsDictionaryBox1» и компонента UiRdsDictionary, являющегося источником данных для «RdsDictionaryBox1».


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


После выполнения примера при нажатии кнопки будет создан элемент в справочнике НСИ.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
