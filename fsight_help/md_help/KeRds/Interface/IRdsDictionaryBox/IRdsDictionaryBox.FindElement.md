# IRdsDictionaryBox.FindElement

IRdsDictionaryBox.FindElement
-


# IRdsDictionaryBox.FindElement


## Синтаксис


FindElement(Name: String; StartFrom: Integer): Integer;


## Параметры


Name - наименованием элемента,
 по которому осуществляется поиск.


StartFrom - ключ элемента,
 начиная с которого осуществляется поиск.


## Описание


Метод FindElement осуществляет
 поиск элемента справочника НСИ, наименование которого передается посредством
 параметра Name.


## Комментарии


В случае удачного поиска метод возвращает ключ найденного элемента,
 иначе - «-1».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента RdsDictionaryBox с
 наименованием «RdsDictionaryBox1»
 и компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: Integer;

Begin

    i := RdsDictionaryBox1.FindElement("Меры", -2);

    If i <> -1 Then

        RdsDictionaryBox1.FocusedElement := i;

    End If;

End Sub Button1OnClick;


После выполнения примера при нажатии кнопки будет осуществлен поиск
 элемента справочника НСИ, наименование которого начинается со слова «Меры». Поиск осуществляется по всему
 дереву элементов. В случае удачного поиска первый найденный элемент будет
 сфокусирован.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
