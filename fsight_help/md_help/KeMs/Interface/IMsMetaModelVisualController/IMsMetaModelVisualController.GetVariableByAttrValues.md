# IMsMetaModelVisualController.GetVariableByAttrValues

IMsMetaModelVisualController.GetVariableByAttrValues
-


# IMsMetaModelVisualController.GetVariableByAttrValues


## Синтаксис


GetVariableByAttrValues(RubricatorKey: Integer;

                        AttrKeys:
 Array;

                        AttrValues:
 Array;

                        GraphMeta:
 String

                        Var
 VariableExists: Boolean;

                        [ParentKey:
 Integer = -1]): [IMsCalculationChainVariable](../IMsCalculationChainVariable/IMsCalculationChainVariable.htm);


## Параметры


RubricatorKey. Ключ базы данных
 временных рядов;


AttrKeys. Массив ключей атрибутов,
 по значениям которых будет извлекаться переменная;


AttrValues. Массив значений
 атрибутов;


GraphMeta. Графический контекст;


VariableExists. Признак того,
 что переменная, соответствующая указанному ряду, существует во внутренней
 базе данных временных рядов. Возвращается после выполнения метода;


ParentKey. Ключ родительского
 элемента.


## Описание


Метод GetVariableByAttrValues
 возвращает переменную, соответствующую ряду с указанным значением атрибутов.


## Комментарии


Массив AttrKeys должен содержать
 целочисленные значения, а AttrValues
 - значения типа Variant. Порядок ключей атрибутов в массиве AttrKeys
 должен соответствовать порядку значений атрибутов в массиве AttrValues,
 т.е. первый элемент массива AttrKeys
 задает ключ атрибута, а первый элемент массива AttrValues
 - значение данного атрибута и т.д.


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


Для выполнения примера в репозитории должны присутствовать:


	- База данных временных рядов с идентификатором «TSDB», содержащая
	 атрибуты рядов с идентификаторами «COUNTRY» и «INDICATOR». Данные
	 атрибуты должны являться ссылками на справочник. Справочник, на который
	 ссылается атрибут «COUNTRY», должен содержать элемент с ключом 755,
	 а справочник, на который ссылается атрибут «INDICATOR», - элемент
	 с ключом 765.


	- Контейнер моделирования с идентификатором «MS», содержащий метамодель
	 с идентификатором «META».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub GetVariableByAttrValues;

Var

    mb: IMetabase;

    RubObj, MsObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    VarInp: IMsCalculationChainVariable;

    VarEx: Boolean;

    InVarKey, InModelKey: Integer;

    InpKeys: Array[1] Of Integer;

    AttsKey: Array[2] Of Integer;

    AttsVal: Array[2] Of Variant;

    SimpleModel: IMsModel;

    j: Integer;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS");

    // Получаем метамодель

    Meta := mb.ItemByIdNamespace("META", MsObj.Key).Edit As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    // Задаем значения атрибутов входной переменной

    RubObj := mb.ItemById("TSDB");

    AttsKey[0] := (RubObj.Bind As IRubricator).Facts.Attributes.FindById("CITY").Key;

    AttsVal[0] := 755;

    AttsKey[1] := (RubObj.Bind As IRubricator).Facts.Attributes.FindById("INDICATOR").Key;

    AttsVal[1] := 765;

    // Добавляем папку

    j := Meta.CalculationChain.AddFolder("Папка для уравнения").Key;

    // Создаем входную переменную в папке и получаем ключ переменной

    VarInp := MetaVisual.GetVariableByAttrValues(RubObj.Key, AttsKey, AttsVal, "", VarEx, j);

    VarInp.Slice.Level := DimCalendarLevel.Year;

    InpKeys[0] := VarInp.Key;

    // Создаем внутреннюю модель в папке

    SimpleModel := MetaVisual.CreateSimpleModel(-1, InpKeys, VarInp.Key, MsFormulaKind.LinearRegression, "", InVarKey, InModelKey, j);

    // Выводим наименование модели в окно консоли

    Debug.WriteLine(SimpleModel.CreateStringGenerator.Execute);

    // Сохраняем метамодель

    (Meta As IMetabaseObject).Save;

End Sub GetVariableByAttrValues;


В результате выполнения примера в метамодели «META» будет создана папка.
 В данную папку будет добавленная переменная на основе указанных значений
 атрибутов базы данных временных рядов. Также в данной папке будет создана
 модель, использующая добавленную переменную.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
