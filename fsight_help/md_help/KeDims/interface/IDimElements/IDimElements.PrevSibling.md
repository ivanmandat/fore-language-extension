# IDimElements.PrevSibling

IDimElements.PrevSibling
-


# IDimElements.PrevSibling


## Синтаксис


PrevSibling(Element: Integer; [Through: Boolean]):
 Integer;


## Параметры


Element. Индекс элемента.


Through. Необязательный параметр,
 определяющий, будет ли осуществляться переход к элементам этого же уровня
 у другого родителя. По умолчанию False.


## Описание


Свойство PrevSibling возвращает
 индекс предыдущего элемента относительно заданного с учетом родителя и
 уровня. «-1» если нет предыдущего элемента.


## Комментарии


Для получения индекса следующего элемента относительно заданного используйте
 свойство [IDimElements.NextSibling](IDimElements.NextSibling.htm).


## Пример


Использование свойства приведено в примере для [IDimElements.NextSibling](IDimElements.NextSibling.htm).


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
