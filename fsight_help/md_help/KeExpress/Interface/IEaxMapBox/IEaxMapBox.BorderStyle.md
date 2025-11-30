# IEaxMapBox.BorderStyle

IEaxMapBox.BorderStyle
-


# IEaxMapBox.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](ModForms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы компонента.


## Пример


Для выполнения примера предполагается наличие формы, кнопки с наименованием
 «Button1», компонента EaxMapBox с наименованием «EaxMapBox1» и компонента
 UiEaxMap, являющегося источником данных для «EaxMapBox1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    EaxMapBox1.BorderStyle := ControlBorderStyle.Flat;

	End Sub Button1OnClick;


После выполнения примера граница компонента «EaxMapBox1» будет иметь
 объемный вид.


См. также:


[IEaxMapBox](IEaxMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
