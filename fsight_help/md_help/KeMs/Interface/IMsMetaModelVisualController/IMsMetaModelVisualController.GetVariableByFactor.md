# IMsMetaModelVisualController.GetVariableByFactor

IMsMetaModelVisualController.GetVariableByFactor
-


# IMsMetaModelVisualController.GetVariableByFactor


## Синтаксис


GetVariableByFactor(RubricatorKey: Integer;

                    FactorKey:
 Integer;

                    GraphMeta:
 String;

                    Var
 VariableExists: Boolean;

                    [ParentKey:
 Integer = -1]): [IMsCalculationChainVariable](../IMsCalculationChainVariable/IMsCalculationChainVariable.htm);


## Параметры


RubricatorKey. Ключ базы данных
 временных рядов;


FactorKey. Ключ ряда;


GraphMeta. Графический контекст;


VariableExists. Признак того,
 что переменная, соответствующая указанному ряду, существует во внутренней
 базе данных временных рядов. Возвращается после выполнения метода;


ParentKey. Ключ родительского
 элемента.


## Описание


Метод GetVariableByFactor возвращает
 переменную, соответствующую ряду из указанной базы данных временных рядов.


## Комментарии


Параметр GraphMeta может принимать
 значение Null.


Допустимые значения параметра VariableExists:


	- True. Переменная существует
	 во внутренней базе данных временных рядов;


	- False. Переменная отсутствует
	 во внутренней базе данных временных рядов.


Если параметр ParentKey имеет
 значение -1, то переменная содержится в корне базы данных временных рядов.


## Пример


Использование метода приведено в примере для [IMsMetaModelVisualController.HasVariableRubricator](IMsMetaModelVisualController.HasVariableRubricator.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
