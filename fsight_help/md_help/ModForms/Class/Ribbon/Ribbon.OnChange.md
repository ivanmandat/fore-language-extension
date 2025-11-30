# Ribbon.OnChange

Ribbon.OnChange
-


# Ribbon.OnChange


## Синтаксис


OnChange(Sender: Object; Args: [IRibbonChangeEventArgs](../../Interface/IRibbonChangeEventArgs/IRibbonChangeEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnChange наступает при
 использовании каких-либо элементов управления ленты.


## Комментарии


Событие наступает при нажатии кнопок, изменении состояний флагов и переключателей,
 выбора каких-либо значений из раскрывающихся списков и т.д. Используя
 свойство аргумента события [Element](../../Interface/IRibbonChangeEventArgs/IRibbonChangeEventArgs.Element.htm)
 можно получить элемент управления, действия с которым привели к срабатыванию
 события.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента Ribbon с наименованием Ribbon1. Указанная процедура
 установлена в качестве обработчика события OnChange компонента Ribbon1.


			Sub Ribbon1OnChange(Sender: Object; Args: IRibbonChangeEventArgs);

Var

    RibbonElemet: IBaseRibbonElement;

Begin

    RibbonElemet := Args.Element;

    Select Case RibbonElemet.Id

        /// <summary>

        /// Далее идут блоки Case, в которых реализованы необходимые действия

        /// для элементов управления, в зависимости от их идентификаторов

        /// </summary>

    End Select;

End Sub Ribbon1OnChange;


При срабатывании события будет осуществлена проверка элементов управления
 по идентификаторам. Указав свои блоки Case можно произвести необходимые
 действия в зависимости от того, каким элементом управления было сгенерировано
 данное событие.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
