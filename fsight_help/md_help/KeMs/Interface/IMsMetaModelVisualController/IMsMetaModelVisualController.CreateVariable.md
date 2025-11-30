# IMsMetaModelVisualController.CreateVariable

IMsMetaModelVisualController.CreateVariable
-


# IMsMetaModelVisualController.CreateVariable


## Синтаксис


CreateVariable(Name: String;

               GraphMeta:
 String;

               Level:
 [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


               Var
 VariableExists: Boolean;


               [ParentKey:
 Integer = -1;]

               [InCycle:
 Boolean = False]): [IMsCalculationChainVariable](../IMsCalculationChainVariable/IMsCalculationChainVariable.htm);


## Параметры


Name. Наименование создаваемой
 переменной;


GraphMeta. Графический контекст;


Level. Календарная динамика
 переменной;


VariableExists. Признак того,
 что переменная с наименованием Name
 и динамикой Level уже существует
 во внутренней базе данных временных рядов. Возвращается после выполнения
 метода;


ParentKey. Ключ родительского
 элемента;


InCycle. Признак того, что
 переменная создается в цикле.


## Описание


Метод CreateVariable создает
 внутреннюю переменную метамодели.


## Комментарии


Внутренняя переменная может быть создана, если [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm)
 имеет значение True, то есть метамодель
 содержит внутреннюю базу данных временных рядов.


Параметр GraphMeta может принимать
 значение Null.


Допустимые значения параметра VariableExists:


	- True. Переменная существует
	 во внутренней базе данных временных рядов;


	- False. Переменная отсутствует
	 во внутренней базе данных временных рядов.


Если параметр ParentKey
 имеет значение -1, то внутренняя переменная создаётся в корне метамодели.


Допустимые значения параметра InCycle:


	- True. Переменная создается
	 в цикле. Этот способ используется и для создания переменных в веб-приложении
	 и для генерации задачи из экспресс-отчета. При генерации задачи в
	 цикле добавляется много переменных, при этом этап проверки, есть ли
	 такая переменная в задаче, можно пропустить. Также можно пропустить
	 обновление отметки в срезах и обновить ее в конце цикла;


	- False. Переменная создается
	 в стандартном режиме.


## Пример


Использование метода приведено в примере для [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
