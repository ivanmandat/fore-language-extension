# IDimOrmCondition.EvaluateRec

IDimOrmCondition.EvaluateRec
-


# IDimOrmCondition.EvaluateRec


## Синтаксис


EvaluateRec(Value: [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm)):
 Boolean;


## Параметры


Value. Коллекция значений атрибутов,
 реализуемая интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm),
 по которым будет осуществляется проверка.


## Описание


Метод EvaluateRec осуществляет
 проверку значений атрибутов и возвращает признак соответствия условиям
 поиска.


## Комментарии


Данный метод используется для проверки элементов справочников НСИ. Получить
 значение атрибутов, реализуемое интерфейсом [IOrmRecord](KeOrm.chm::/Interface/IOrmRecord/IOrmRecord.htm)
 можно используя свойство [IRdsDictionaryElementData.Record](KeRds.chm::/Interface/IRdsDictionaryElementData/IRdsDictionaryElementData.Record.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента RdsDictionaryBox
 с наименованием «RdsDictionaryBox1» и какого-либо компонента UiRdsDictionary
 являющегося источником данных для «RdsDictionaryBox1». В справочнике НСИ,
 который подключен к компоненту UiRdsDictionary,
 имеются атрибуты «Name» и «UserAttr».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        RdsInst: IRdsDictionaryInstance;

        Search: IRdsDictionaryElementsSearch;

        Cond: IDimOrmCondition;

        Crit: IDimTextCriteria;

        Elems: IRdsDictionaryElements;

        Elem: IRdsDictionaryElement;

        i: Integer;

    Begin

        RdsInst := RdsDictionaryBox1.Source.Instance;

        Search := RdsInst.CreateSearch;

        Search.Attributes.Attributes := "Name;UserAttr";

        Crit := New DimTextCriteria.Create;

        Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes

            Or TextCriteriaOptions.FreeText;

        Crit.Text := "Доход насел";

        Cond := Search.Condition;

        Cond.SetTextCriteria(Crit);

        Elems := RdsInst.Elements;

        For i := 0 To Elems.Count - 1 Do

            Elem := Elems.Item(i);

            Debug.WriteLine(Elem.Name + ": Условиям поиска удовлетворяет - " +

                Cond.EvaluateRec(Elem.Record).ToString);

        End For;

    End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет создан объект для
 поиска элементов справочника НСИ. Будет установлено условие, в соответствии
 с которым будет производиться поиск. После этого будет осуществлена проверка
 всех элементов на соответствии условиям поиска. Наименования элементов
 и результат проверки будут выведены в консоль среды разработки.


См. также:


[IDimOrmCondition](IDimOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
