# GxColor.CreateHSB

GxColor.CreateHSB
-


# GxColor.CreateHSB


## Синтаксис


CreateHSB(H: Double; S: Double; B: Double);


## Параметры


H. Тон цвета в градусах от
 0,0 до 360,0.


S. Насыщенность цвета от 0,0
 до 1,0.


B. Яркость цвета от 0,0 до
 1,0.


## Описание


Конструктор CreateHSB создает
 новый цвет в соответствии с указанными значениями тона, насыщенности и
 яркости.


## Пример


			Function GetColorHSB(H: Double; S: Double; B: Double): IGxColor;

Var

    OutColor: IGxColor;

Begin

    If (H >= 0) And (H <= 360) And

        (S >= 0) And (S <= 1) And

        (B >= 0) And (B <= 1) Then

        OutColor := New GxColor.CreateHSB(H, S, B);

        Return OutColor;

    Else

        Return Null;

    End If;

End Function GetColorHSB;


Данная функция вернет цвет, созданный на основании информации о тоне,
 насыщенности и яркости цвета.


См. также:


[GxColor](GxColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
