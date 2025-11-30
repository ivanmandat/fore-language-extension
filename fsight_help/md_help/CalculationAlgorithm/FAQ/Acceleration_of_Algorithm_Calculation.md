# Как ускорить расчёт алгоритма?

Как ускорить расчёт алгоритма?
-


# Как ускорить расчёт алгоритма?


Для ускорения [расчёта алгоритма](../Desktop/Work/Perform_calculations.htm):


	- убедитесь, что в ветке реестра [HKEY_CURRENT_USER\Software\Foresight\Foresight Analytics Platform\10.0\Debug] не создан
	 параметр [MsDump](uimodelling.chm::/faq/logging_of_the_calculation.htm)
	 или он принимает значение «0». Если параметр принимает значение «1»,
	 «2» или «3», то при расчёте алгоритма выполняется сбор и вывод дополнительной
	 отладочной информации, который влияет на скорость расчёта;


	- настройте [многопоточный
	 расчёт](MultiThreadedCalculation.htm) и определите оптимальное число потоков для параллельного
	 расчёта итераций. Также сравните время выполнения этапа инициализации
	 при многопоточном и однопоточном расчёте алгоритма;


	- настройте [фильтрацию
	 по данным](../Desktop/Calculation_block/FilteringByData.htm) в [блоках
	 расчёта](../Desktop/Calculation_block/Calculation_unit.htm) и [блоках
	 контроля](../Desktop/Control_Block/Control_Block.htm), если в [источнике](../Desktop/Calculation_block/Page_Sources.htm)
	 содержится небольшой объём данных;


	- настройте [фильтрацию
	 по связям атрибутов](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/AttrLinksDimFilter.htm) для измерений выбранного [приёмника
	 данных](../Desktop/Calculation_block/Master_calculation_block_page_consumer.htm) в [блоках
	 расчёта](../Desktop/Calculation_block/Calculation_unit.htm) и [блоках
	 контроля](../Desktop/Control_Block/Control_Block.htm);


	- установите флажок «Загружать
	 данные отдельно от остальных» в контекстном меню [блоков
	 расчёта](../Desktop/Calculation_block/Calculation_unit.htm) и [блоков
	 контроля](../Desktop/Control_Block/Control_Block.htm), если в нескольких блоках используется разная отметка
	 одного и того же [источника
	 данных](../Desktop/Calculation_block/Page_Sources.htm). Раздельная загрузка данных сокращает общее время расчёта
	 алгоритма.


Для ускорения загрузки данных [источника](../Desktop/Calculation_block/Page_Sources.htm)
 в алгоритме расчёта:


	- выберите оптимальный [метод
	 фильтрации](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_3.htm#dim_properties) измерений куба. Например, если в расчёте
	 используется полная отметка по измерению или отмечено большинство
	 элементов для объёмных справочников, то с использованием метода «Извлекать все данные независимо от отметки»
	 ускорится загрузка данных в алгоритме расчёта;


	- создайте [индексы](uinavobj.chm::/table/master/uidb_relational_table_master_index.htm)
	 в таблицах, на основе которых построены кубы. Индексирование обеспечивает
	 быстрый поиск и выборку значений, а также соблюдение уникальности
	 значений определенных полей.


Для ускорения расчёта [алгоритмов](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm),
 используемых в инструменте «[Интерактивные
 формы ввода данных](DataEntryForms.chm::/DataEntryForms_Purpose.htm)»:


	- [исключите](../Desktop/Work/CalculationOrder.htm) из алгоритма
	 расчёта блоки, которые не используются в форме ввода. Если алгоритм
	 расчёта используется в нескольких формах ввода, то создайте копии
	 алгоритма расчёта для каждой формы ввода с соответствующим набором
	 блоков;


	- объедините [блоки
	 расчёта](../Desktop/Calculation_block/Calculation_unit.htm), которые используют один и тот же [приёмник
	 данных](../Desktop/Calculation_block/Master_calculation_block_page_consumer.htm) с одинаковой отметкой;


	- выберите тип формирования области расчёта «[Пересечение отметок](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm#common)»
	 напротив алгоритма расчёта в мастере табличной области на странице
	 «[Алгоритмы расчёта](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm#common)»,
	 если для расчёта алгоритма предполагается использовать только пересечение
	 отметки из алгоритма по всем измерениям с отметкой в табличной области;


	- снимите флажок «[Расширять отметку](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm#common)»
	 напротив алгоритма расчёта в мастере табличной области на странице
	 «[Алгоритмы расчёта](DataEntryForms.chm::/Desktop/Table/Calculation_Practices.htm#common)»,
	 если для расчёта алгоритма не предполагается использовать данные,
	 которые не отображаются в форме ввода.


См. также:


[Вопросы и ответы](FAQ_CalculationAlgorithm.htm)
 | [Расчёт
 алгоритма](../Desktop/Work/Perform_calculations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
