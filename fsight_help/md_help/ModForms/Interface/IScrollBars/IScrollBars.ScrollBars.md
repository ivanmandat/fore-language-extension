# IScrollBars.ScrollBars

IScrollBars.ScrollBars
-


# IScrollBars.ScrollBars


## Синтаксис


ScrollBars: [ControlScrollStyle](../../Enums/ControlScrollStyle.htm);


## Описание


Свойство ScrollBars возвращает
 значение, указывающее наличие полос прокрутки у компонента.


## Пример


	Sub ScrollsInfo(Control: IControl);

	Var

	    Scrolls: IScrollBars;

	Begin

	    Scrolls := Control.Scrolls;

	    Select Case Scrolls.ScrollBars

	        Case ControlScrollStyle.None:

	            Debug.WriteLine("Компонент не имеет полосы прокрутки.");

	        Case ControlScrollStyle.Horizontal:

	            Debug.WriteLine("Горизонтальная полоса прокрутки:");

	            WriteScrollInfo(Scrolls.HScrollInfo);

	        Case ControlScrollStyle.Vertical:

	            Debug.WriteLine("Вертикальная полоса прокрутки:");

	            WriteScrollInfo(Scrolls.VScrollInfo);

	        Case ControlScrollStyle.Both:

	            Debug.WriteLine("Горизонтальная полоса прокрутки:");

	            WriteScrollInfo(Scrolls.HScrollInfo);

	            Debug.WriteLine("Вертикальная полоса прокрутки:");

	            WriteScrollInfo(Scrolls.VScrollInfo);

	    End Select;

	End Sub ScrollsInfo;


	Sub WriteScrollInfo(Info: IScrollInfo);

	Begin

	    Debug.WriteLine("Минимальная позиция: " + Info.Min.ToString);

	    Debug.WriteLine("Максимальная позиция: " + Info.Max.ToString);

	    Debug.WriteLine("Размер страницы: " + Info.Page.ToString);

	    Debug.WriteLine("Текущая позиция ползунка: " + Info.Pos.ToString);

	End Sub WriteScrollInfo;


Процедура ScrollsInfo позволяет получить информацию о полосах прокрутки
 компонента, который передается в качестве входного параметра Control.
 Информация о полосах прокрутки выводится в консоль среды разработки.


См. также:


[IScrollBars](IScrollBars.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
