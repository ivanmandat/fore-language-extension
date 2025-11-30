# SnapshotApplyOperationType

SnapshotApplyOperationType
-


# SnapshotApplyOperationType


## Описание


Перечисление SnapshotApplyOperationType содержит типы операций, производимых при применении политики безопасности.


Используется следующим методом:


-
[ISecuritySnapshotCallback.OnOperation](../Interface/ISecuritySnapshotCallback/ISecuritySnapshotCallback.OnOperation.htm).


## Допустимые значения


 Значение
 Краткое описание


 0
 None. Нет.


 1
 Begin. Начало.


 2
 Read. Чтение из файла.


 3
 Prepare. Чтение из репозитория и сравнение.


 4
 Descriptors. Добавление дескрипторов прав доступа.


 5
 Objects. Установка прав на объекты.


 6
 Security. Политика безопасности.


 7
 IsaUser. Активация АИБ.


 8
 UpdateUsers. Обновление пользователей.


 9
 End. Окончание.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
