# Модель GM(1,1) (Грей-метод)

Модель GM(1,1) (Грей-метод)
-


# Модель GM(1,1) (Грей-метод)


Грей-метод подходит для прогнозирования
 поведения нелинейных временных рядов. Данный метод относится к нестатистическим
 методам прогнозирования и особенно эффективен в условиях недостаточного
 числа наблюдений.


Обозначим наблюдаемый временной ряд как ![](../img/Grey_1.gif), где n - количество наблюдений.


Определим ряд x(1) следующим образом: ![](../img/Grey_2.gif).


Где:


![](../img/Grey_3.gif)


![](../img/Grey_4.gif)


Модель GM(1,1) определяется дифференциальным уравнением первого порядка:


![](../img/Grey_5.gif)


Получить решение можно с помощью метода наименьших квадратов:


![](../img/Grey_10.gif),


где:


![](../img/Grey_6.gif)


![](../img/Grey_7.gif)


Дискретное решение дифференциального уравнения:


![](../img/Grey_8.gif)


Тогда предсказанный ряд рассчитывается по формуле:


![](../img/Grey_9.gif), где k = 2,3,…,n.


См. также:


[Библиотека методов и моделей](../uimodelling_lib_common.htm)
 | Контейнер моделирования: спецификация модели «[Грей-метод](uimodelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_GrayForecast.htm)» |
 Анализ временных рядов: прогнозирование [Грей-методом](uidw.chm::/Workbook/CalculatedSeries/Forecast/UiDw_cs_GreyForecast.htm) |
 [IModelling.Greyforecast](kems.chm::/Interface/IModelling/IModelling.Greyforecast.htm) |
 [ISmGreyForecast](StatLib.chm::/Interface/ISmGreyForecast/ISmGreyForecast.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
