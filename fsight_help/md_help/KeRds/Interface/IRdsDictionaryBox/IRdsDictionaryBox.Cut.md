# IRdsDictionaryBox.Cut

IRdsDictionaryBox.Cut
-


# IRdsDictionaryBox.Cut


## Синтаксис


Cut;


## Описание


Метод Cut перемещает выбранный
 элемент справочника в буфер обмена.


## Комментарии


Для вставки элемента из буфера обмена в текущее место справочника используйте
 метод [IRdsDictionaryBox.Paste](IRdsDictionaryBox.Paste.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент UiRdsDictionary с идентификатором
 «UiRdsDictionary1» и компонент RdsDictionaryBox с идентификатором «RdsDictionaryBox1».
 Для компонента «RdsDictionaryBox1» укажите источник данных «UiRdsDictionary1».
 В качестве источника данных для компонента «UiRdsDictionary1» используется
 справочник НСИ.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    RdsDictionaryBox1.Cut;

End Sub Button1OnClick;


При нажатии на кнопку выбранный элемент справочника будет перемещён
 в буфер обмена.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
