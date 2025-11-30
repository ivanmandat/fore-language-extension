# ListView.OnGetHint

ListView.OnGetHint
-


# ListView.OnGetHint


## Синтаксис


OnGetHint(Sender: Object; Args: [IListViewEditTextEventArgs](../../Interface/IListViewEditTextEventArgs/IListViewEditTextEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetHint наступает
 при появлении всплывающей подсказки у элемента, над которым остановился
 курсор мыши.


## Комментарии


В виду особенностей реализации компонента при наведении курсора мыши
 на элемент событие OnGetHint будет
 генерироваться два раза.


См. также:


[ListView](ListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
