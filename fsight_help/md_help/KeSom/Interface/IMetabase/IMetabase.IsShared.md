# IMetabase.IsShared

IMetabase.IsShared
-


# IMetabase.IsShared


## Синтаксис


		IsShared: Boolean;


## Описание


Свойство IsShared возвращает
 признак наличия настроек для работы с системой управления версиями.


## Комментарии


Для установки признака работы репозитория с системой управления версиями
 используется свойство [IVcsParams.IsShared](../IVcsParams/IVcsParams.IsShared.htm).
 Текущее свойство IsShared позволяет
 проверить, имеются ли необходимые настройки на данном компьютере.


Если репозиторий подключен к системе управления версиями ([IVcsParams.IsShared](../IVcsParams/IVcsParams.IsShared.htm) = True)
 и данное свойство возвращает значение False,
 то необходимо определить локальные настройки. Для этого используются следующие
 свойства:


	- [AuxProjPath](../IMetabaseDefinition/IMetabaseDefinition.AuxProjPath.htm);


	- [VcsLocalPath](../IMetabaseDefinition/IMetabaseDefinition.VcsLocalPath.htm).


При наличии локальных настроек для работы с системой управления версиями
 свойство IsShared возвращает значение
 True.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
