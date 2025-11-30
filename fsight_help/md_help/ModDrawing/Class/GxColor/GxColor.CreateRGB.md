# GxColor.CreateRGB

GxColor.CreateRGB
-


# GxColor.CreateRGB


## Синтаксис


		CreateRGB(R: Integer, G: Integer, B: Integer);


## Параметры


R. Красная компонента цвета.


G. Зеленая компонента цвета.


B. Синяя компонента цвета.


## Описание


Конструктор CreateRGB создает
 новый цвет в соответствии с указанными значениями красной, зеленой и синей
 компонент.


## Комментарии


Для указания компонент цвета используйте целые числа в диапазоне от
 0 до 255.


При определении цвета заливки выделенных ячеек таблицы с помощью свойства
 [ITabView.SelectionColor](TabSheet.chm::/Interface/ITabView/ITabView.SelectionColor.htm)
 будет использоваться степень прозрачности цвета, заданная в [настройках репозитория
 по умолчанию](UiNav.chm::/02_navigator/repo_default.htm) в параметре «[Прозрачность
 цвета заливки (%)](UiNav.chm::/02_navigator/repo_default.htm#design)».


## Пример


Использование конструктора приведено в примере для [IVZControlStyle.Background](KeVisualizators.chm::/Interface/IVZControlStyle/IVZControlStyle.Background.htm).


См. также:


[GxColor](GxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
