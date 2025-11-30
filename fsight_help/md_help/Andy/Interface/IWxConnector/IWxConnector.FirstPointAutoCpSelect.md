# IWxConnector.FirstPointAutoCpSelect

IWxConnector.FirstPointAutoCpSelect
-


# IWxConnector.FirstPointAutoCpSelect


## Синтаксис


FirstPointAutoCpSelect: Boolean;


## Описание


Свойство FirstPointAutoCpSelect
 определяет признак использования автоматического выбора точки при соединении
 начала соединяющего объекта с другой фигурой.


## Комментарии


Если значение данного свойства True,
 то связь будет привязана к одной из точек соединения "по периметру"
 в зависимости от места положения объекта, то есть фактически для соединения
 используется точка соединения "по центру".


Если значение данного свойства False,
 то связь будет всегда привязана к одной [точке
 соединения](UiWsp.chm::/2_WorkSpace/Objects_Work/UiWsp_ObjectsWork_Points.htm) объекта вне зависимости от места расположения объекта.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащее две фигуры и связь между ними.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Link: IWxLink;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := Wsp.Shapes;

	    Link := Wsp.Shapes.Item(2) As IWxLink;

	    Link.FirstPointAutoCpSelect := True;

	    Link.LastPointAutoCpSelect := True;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для связи будет использоваться автоматический
 выбор точек.


См. также:


[IWxConnector](IWxConnector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
