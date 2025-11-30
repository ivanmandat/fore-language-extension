# NLOSolverType

NLOSolverType
-


# NLOSolverType


## Описание


Перечисление NLOSolverType используется
 для определения программного обеспечения, используемого для решения задачи
 нелинейной оптимизации.


Используется следующим свойством:


	- [ISmNonLinearOptimization.SolverType](../Interface/ISmNonLinearOptimization/ISmNonLinearOptimization.SolverType.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Platform. Используется
		 «Форсайт. Аналитическая платформа».


		 1
		 Lindo. Используется
		 модуль LINDO.


		 2
		 Ralabama. Используется
		 пакет R под названием ALABAMA.


		 3
		 Rsolnp. Используется
		 пакет R под названием Rsolnp.


## Комментарии


Модуль LINDO - это программное обеспечение для целочисленного программирования,
 линейного программирования, нелинейного программирования, стохастического
 программирования, глобальной оптимизации.


Для использования модуля LINDO его необходимо предварительно установить.
 Получить подробную информацию о модуле LINDO и его условиях его использования
 можно на сайте [www.lindo.com](http://www.lindo.com/).


Пакет R под названием ALABAMA - Augmented Lagrangian Adaptive Barrier
 Minimization Algorithm, используется для оптимизации гладких нелинейных
 целевых функций с ограничениями.


Пакет R под названием Rsolnp, используется для общей нелинейной оптимизации
 с использованием метода обобщенных множителей Лагранжа.


Для использования пакетов R их нужно предварительно [установить](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm#r).
 Подробную информацию о пакете R можно получить по ссылке: http://cran.r-project.org/web/packages/<наименование
 пакета>/. Например: [http://cran.r-project.org/web/packages/lmtest/](http://cran.r-project.org/web/packages/lmtest/).


См. также:


[Перечисления
 сборки Stat](StatLib_Enums.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
