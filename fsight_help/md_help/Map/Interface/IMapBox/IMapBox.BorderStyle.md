# IMapBox.BorderStyle

IMapBox.BorderStyle
-


# IMapBox.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](ModForms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы компонента.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, с наименованиями Button1 и MapBox1 соответственно.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    MapBox1.BorderStyle:=ControlBorderStyle.Single;

	End Sub Button1OnClick;


После выполнения примера граница компонента MapBox1 будет иметь объемный
 вид.


См. также:


[IMapBox](IMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
