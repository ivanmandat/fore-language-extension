# RdsDictionaryBoxEventArgs.Create

RdsDictionaryBoxEventArgs.Create
-


# RdsDictionaryBoxEventArgs.Create


## Синтаксис


Create(Key: Integer);


## Параметры


Key. Ключ
 элемента справочника НСИ, относительно которого, будет производиться какое-либо
 действие.


## Описание


Метод Create создает аргумент
 события, возникающего при каком-либо действии с элементами справочника
 НСИ, отображаемыми в компоненте [RdsDictionaryBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/RdsDictionaryBox.htm).


## Пример


Для выполнения примера предполагается наличие формы, кнопки с наименованием
 Button1, компонента RdsDictionaryBox с наименованием «RdsDictionaryBox1»
 и компонента UiRdsDictionary, являющегося источником данных для RdsDictionaryBox1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Inst: IRdsDictionaryInstance;

	    Elements: IRdsDictionaryElements;

	    Key: Integer;

	    Elem: IRdsDictionaryBoxEventArgs;

	Begin

	    Inst := RdsDictionaryBox1.Source.Instance;

	    Elements := Inst.Elements;

	    Key := Elements.Item(Elements.Count - 1).Key;

	    Elem := New RdsDictionaryBoxEventArgs.Create(Key);

	    RdsDictionaryBox1.OnSelectionChanged(RdsDictionaryBox1, Elem);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, будет сгенерировано
 событие смены фокуса на последний элемент дерева элементов. Фактической
 смены фокуса не производится.


См. также:


[RdsDictionaryBoxEventArgs](RdsDictionaryBoxEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
