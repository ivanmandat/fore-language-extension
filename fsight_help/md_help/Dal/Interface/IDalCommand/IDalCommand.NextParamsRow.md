# IDalCommand.NextParamsRow

IDalCommand.NextParamsRow
-


# IDalCommand.NextParamsRow


## Синтаксис


NextParamsRow;


## Описание


Метод NextParamsRow сохраняет
 текущий набор параметров и переходит к следующему.


## Комментарии


Максимальное количество наборов задается в свойстве [MaxParamsRows](IDalCommand.MaxParamsRows.htm).
 После перехода к следующему набору значения параметров могут быть определены
 в свойстве [Params](IDalCommand.Params.htm). Изначально курсор
 установлен на первом наборе параметров, поэтому количество переходов с
 помощью метода NextParamsRow должно
 быть на один меньше, чем количество заполняемых наборов.


## Пример


Пример использования приведен в описании свойства [IDalCommand.MaxParamsRows](IDalCommand.MaxParamsRows.htm).


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
