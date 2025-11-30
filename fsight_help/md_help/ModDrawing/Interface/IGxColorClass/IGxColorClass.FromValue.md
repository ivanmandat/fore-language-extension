# IGxColorClass.FromValue

IGxColorClass.FromValue
-


# IGxColorClass.FromValue


## Синтаксис


FromValue(Value: Integer): [IGxColor](../IGxColor/IGxColor.htm);


## Параметры


Value.
 Значение цвета.


## Описание


Метод FromValue возвращает объект,
 содержащий цвет, значение которого передается посредством входного параметра.


## Комментарии


Для получения значения необходимого цвета выполните следующие преобразования:


	- Зная значения компонент необходимого цвета ([B](../IGxColor/IGxColor.B.htm),
	 [G](../IGxColor/IGxColor.G.htm), [R](../IGxColor/IGxColor.R.htm))
	 приведите эти значения к шестнадцатиричному виду (компонента [A](../IGxColor/IGxColor.A.htm)
	 не используется).


	- Получите одно 32-битное шестнадцатиричное число путем объединения
	 отдельных компонент в следующем порядке: [B](../IGxColor/IGxColor.B.htm),
	 [G](../IGxColor/IGxColor.G.htm), [R](../IGxColor/IGxColor.R.htm).


	- Полученное шестнадцатиричное число приведите к десятичному виду.
	 Это значение подставьте в качестве значения параметра Value для получения
	 цвета.


Для получения компонент [B](../IGxColor/IGxColor.B.htm),
 [G](../IGxColor/IGxColor.G.htm), [R](../IGxColor/IGxColor.R.htm)
 стандартных цветов можно использовать значения, определенные для констант
 перечисления [GxKnownColor](../../Enums/GxKnownColor.htm).
 В значениях констант компоненты цвета указаны в следующем порядке: [A](../IGxColor/IGxColor.A.htm), [R](../IGxColor/IGxColor.R.htm),
 [G](../IGxColor/IGxColor.G.htm), [B](../IGxColor/IGxColor.B.htm).


Например: [GxKnownColor.Red](../../Enums/GxKnownColor.htm)
 = 4294901760^10 = FFFF0000^16, где [A](../IGxColor/IGxColor.A.htm)
 = FF, [R](../IGxColor/IGxColor.R.htm) = FF, [G](../IGxColor/IGxColor.G.htm)
 = 00, [B](../IGxColor/IGxColor.B.htm) = 00. Необходимое значение
 для метода FromValue будет: 0000FF^16
 = 255^10.


## Пример


	- Если необходимо получить оттенок
	 синего цвета: В десятичном виде компоненты [B](../IGxColor/IGxColor.B.htm),
	 [G](../IGxColor/IGxColor.G.htm), [R](../IGxColor/IGxColor.R.htm)
	 имеют значения 204, 51 и 51 соответственно. В шестнадцатиричном виде
	 - CC, 33 и 33. Объединив данные компоненты получим число CC3333^16
	 = 13382451^10. Полученное значение «13382451» подставляется в метод
	 FromValue для получения оттенка
	 синего.


	- Если необходимо получить красный
	 цвет: В десятичном виде компоненты [B](../IGxColor/IGxColor.B.htm),
	 [G](../IGxColor/IGxColor.G.htm), [R](../IGxColor/IGxColor.R.htm)
	 имеют значения 0, 0 и 255 соответственно. В шестнадцатиричном виде
	 - 00, 00 и FF. Объединив данные компоненты получим число 0000FF^16
	 = 255^10. Полученное значение «255» подставляется в метод FromValue
	 для получения красного цвета.


	Sub UserColor;

	Var

	    Color, RedColor: IGxColor;

	Begin

	    Color := GxColor.FromValue(13382451);

	    RedColor := GxColor.FromValue(255);

	End Sub UserColor;


См. также:


[IGxColorClass](IGxColorClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
