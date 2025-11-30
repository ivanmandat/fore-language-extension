# IWxWorkspace.Replace

IWxWorkspace.Replace
-


# IWxWorkspace.Replace


## Синтаксис


Replace(Shape: [IWxShape](../IWxShape/IWxShape.htm);
 ToWxFigureType: [WxFigureType](../../Enums/wxfiguretype.htm)):
 [IWxShape](../IWxShape/IWxShape.htm);


## Параметры


Shape. Фигура, тип которой
 необходимо заменить;


ToWxFigureType. Требуемый тип
 фигуры.


## Описание


Метод Replace изменяет тип фигуры
 на рабочем пространстве на указанный.


## Комментарии


Для получения коллекции фигур рабочего пространства используете свойство [IWxWorkspace.Shapes](iwxworkspace.shapes.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором «WSP», содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем первую фигуру на рабочем пространстве

	    Shape := Wsp.Shapes.Item(0);

	    // Меняем тип фигуры

	    Wsp.Replace(Shape, WxFigureType.Ellipse);

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


 В результате выполнения примера был изменен тип первой фигуры
 на рабочем пространстве.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
