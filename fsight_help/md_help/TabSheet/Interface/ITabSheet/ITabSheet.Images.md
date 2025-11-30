# ITabSheet.Images

ITabSheet.Images
-


# ITabSheet.Images


## Синтаксис


Images: [ITabImages](../ITabImages/ITabImages.htm);


## Описание


Свойство Images возвращает объект,
 содержащий коллекцию картинок таблицы.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Rep: IEaxAnalyzer;

	    Tab: ITabSheet;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("EXP_REP").Bind As IEaxAnalyzer;

	    Tab:=Rep.Grid.TabSheet;

	    ImageBox1.Image:=Tab.Images.Item(0);

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку в компонент с наименованием
 «ImageBox1» будет загружена первая картинка таблицы экспресс-отчета с
 идентификатором «EXP_REP».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
