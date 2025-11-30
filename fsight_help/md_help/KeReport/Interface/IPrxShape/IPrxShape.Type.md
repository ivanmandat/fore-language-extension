# IPrxShape.Type

IPrxShape.Type
-


# IPrxShape.Type


## Синтаксис


Type: [PrxShapeType](../../Enums/PrxShapeType.htm);


## Описание


Свойство Type определяет тип
 фигуры.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 Подключите системные сборки: Report, Tab, Drawing, Forms.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    TabObj: ITabObject;

    Placement: IGxRectF;

    PrxShape: IPrxShape;

Begin

    Tab := UiTabSheet1.TabSheet;

    Placement := New GxRectF.Create(3, 3, 30, 30);

    TabObj := Tab.Objects.Add("PrxShape", Placement);

    PrxShape := TabObj.Extension As IPrxShape;

    PrxShape.Type := PrxShapeType.Octagon;

End Sub Button1OnClick;


При нажатии на кнопку на листе отчета будет создан восьмиугольник:


![](IPrxShape.Type.gif)


См. также:


[IPrxShape](IPrxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
