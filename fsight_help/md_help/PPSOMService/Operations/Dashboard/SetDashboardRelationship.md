# SetDashboardRelationship: Операция

SetDashboardRelationship: Операция
-


**


# SetDashboardRelationship


## Синтаксис


bool SetDashboardRelationship(string mon, DashboardRelationship
 tArg)


## Параметры


mon. Моникёр
 для работы с отношением.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDashboardRelationship
 изменяет настройки отношения.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Relationships!ключ
 отношения», а в поле tArg
 устанавливаемые настройки отношения. Моникёр может быть получен при выполнении
 операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек отношения завершилось успешно.


## Пример


Ниже приведён пример изменения настроек отношения. В запросе передаётся
 моникёр отношения и список задаваемых настроек. В ответе возвращаются
 признак успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardRelationship xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships!4</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>4</k>  <id>DOWN_PREV</id>  <n>Предыдущий элемент предыдущего уровня</n>[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <numField>1</numField>  <formula>T.DOWN.PREV</formula>  </it>
  </its>
  </tArg>
  </SetDashboardRelationship>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardRelationshipResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardRelationshipResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardRelationship" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships!4",
   "tArg" :
    {
     "k" : "4",
     "id" : "DOWN_PREV",
     "n" : "Предыдущий элемент предыдущего уровня",
     "its" :
      {
       "it" :
        [
          {
           "numField" : "1",
           "formula" : "T.DOWN.PREV"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetDashboardRelationshipResult" : "1"
}


public static bool SetDashboardRelationship(string moniker, uint sourceKey, uint relKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardRelationship()
    {
        tArg = new DashboardRelationship()
        {
            k = relKey,
            id = "DOWN_PREV",
            n = "Предыдущий элемент предыдущего уровня",
            its = new DashboardDimensionRelation[]
            {
                new DashboardDimensionRelation()
                {
                    formula = "T.DOWN.PREV",
                    numField = 1
                }
            }
        },
        // Моникёр для работы с отношением
        mon = moniker + "!Sources!" + sourceKey + "!Relationships!" + relKey
    };
    // Изменение настроек отношения
    var result = somClient.SetDashboardRelationship(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
