# IMsProblem.ValueFlag

IMsProblem.ValueFlag
-


# IMsProblem.ValueFlag


## Синтаксис


		ValueFlag: Integer;


## Описание


Свойство ValueFlag определяет
 значение флага, используемого для отметки изменившихся значений.


## Комментарии


По умолчанию свойству установлено значение «-1», при этом всем изменённым
 данным в матрице будет установлен флаг «1» и осуществлено сохранение матрицы
 с этим флагом. Если в свойстве ValueFlag
 передать значение «0», то матрица будет считаться неизменённой и никакие
 данные сохранены не будут. Если в ValueFlag
 передаётся значение больше нуля, то сохраняются те данные, для которых
 установлен передаваемый флаг изменившихся значений. Допустимое значение
 свойства находится в диапазоне [0, 255].


Также при сохранении учитывается флаг, заданный в свойстве [IMsProblemCalculationSettings.ValueFlag](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.ValueFlag.htm).


Значение флага будет доступно в событиях [IMsProblemCalculationCallback.OnBeforeSaveData](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBeforeSaveData.htm)
 и [IMsProblemCalculationCallback.OnSaveData](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnSaveData.htm).


## Пример


Пример использования приведён в описании метода [IMsProblemCalculationCallback.OnBeforeSaveData](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBeforeSaveData.htm).


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
