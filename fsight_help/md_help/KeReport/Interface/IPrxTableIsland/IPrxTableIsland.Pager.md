# IPrxTableIsland.Pager

IPrxTableIsland.Pager
-


# IPrxTableIsland.Pager


## Синтаксис


Pager: [IPrxTableIslandPager](../IPrxTableIslandPager/IPrxTableIslandPager.htm);


## Описание


Свойство Pager возвращает параметры
 работы реляционной области в режиме постраничного отображения.


## Комментарии


Для включения режима используйте свойство [IPrxTableIslandPager.Enabled](../IPrxTableIslandPager/IPrxTableIslandPager.Enabled.htm).


Для переключения страниц в режиме постраничного вывода используйте методы
 [IPrxTableIslandPager.Next](../IPrxTableIslandPager/IPrxTableIslandPager.Next.htm)
 и [IPrxTableIslandPager.Prev](../IPrxTableIslandPager/IPrxTableIslandPager.Prev.htm).


## Пример


Для выполнения примера добавьте ссылки на системные сборки Metabase
 и Report. Пример является обработчиками события для компонентов формы.
 На форме расположите компоненты UiReport и ReportBox, 3 кнопки. Выберите
 в качестве объекта UiReport регламентный отчет с реляционной областью.
 Установите UiReport в качестве отчета, выводимого в ReportBox. Активируйте
 UiReport1.


			Class TESTForm: Form

    Report: IPrxReport;

    TabIs: IPrxTableIslands;

    TI: IPrxTableIsland;

    Pager: IPrxTableIslandPager;


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        Report := UiReport1.Report;

        TabIs := Report.TableIslands;

        TI := TabIs.Item(0);

        debug.WriteLine("Область: " + TI.Name);

        Pager := TI.Pager;

        Pager.Enabled := True;

        TI.Recalc;

        Pager.DisplayPage := 0;

        Pager.Rows := 10;

        debug.WriteLine("Количество страниц отображения: " + Pager.Pages.ToString);

        TI.Recalc;

    End Sub TESTFormOnCreate;


    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Pager.Prev;

    End Sub Button1OnClick;


    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Pager.Next;

    End Sub Button2OnClick;


    Sub Button3OnClick(Sender: Object; Args: IMouseEventArgs);

    Begin

        Pager.ExpandAll;

    End Sub Button3OnClick;

End Class TESTForm;


После открытия формы на листе будет загружена первая страница отображения,
 количество страниц будет выведено в окно консоли. Для перехода по страницам
 используйте кнопки с идентификаторами «Button1» и «Button2». Для выключения
 режима постраничного отображения без перевычисления реляционной области
 используйте кнопку с идентификатором «Button3».


См. также:


[IPrxTableIsland](IPrxTableIsland.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
