# SetCalculatedCubeFormulas: Операция

SetCalculatedCubeFormulas: Операция
-


**


# SetCalculatedCubeFormulas


## Синтаксис


bool SetCalculatedCubeFormulas(CubeId tCube, SetCalculatedCubeFormulasRes
 tArg)


## Параметры


tCube. Моникёр
 открытого экземпляра вычисляемого куба.


tArg. Параметры изменения формул
 вычисляемого куба.


## Описание


Операция SetCalculatedCubeFormulas
 изменяет формулы для вычисляемого куба.


## Комментарии


Для выполнения операции укажите в поле tCube
 моникёр экземпляра вычисляемого куба, а в поле tArg
 параметры изменения списка формул. Моникёр экземпляра вычисляемого куба
 можно получить с помощью операции [OpenCube](OpenCube.htm).


В поле tArg.its необходимо сформировать
 элемент, в котором в поле dimIds
 задать моникёры измерений, формирующих координату куба. Список измерений
 может быть получен с помощью операции [GetCube](GetCube.htm)
 или при открытии куба с помощью операции [OpenCube](OpenCube.htm),
 если задан соответствующий шаблон. Далее все измерения необходимо открыть
 с помощью операции [OpenDim](../Dimension/OpenDim.htm) и сформировать
 по ним отметку с помощью операции [ChangeDimSelection](../Dimension/ChangeDimSelection.htm).
 Полученная отметка определит координату куба, по которой будут изменены
 формулы. В поле formulas сформируйте
 формулу или несколько формул, если в кубе настроено управление периодом
 действия формул. Для сохранения изменений в формулах используйте операцию
 [SaveCalculatedCubeFormulas](SaveCalculatedCubeFormulas.htm).


Результатом операции будет логическое значение true,
 если изменение формул завершилось успешно.


## Пример


Ниже приведён пример изменения формулы по заданной координате вычисляемого
 куба. В запросе передаются моникёр экземпляра куба и моникёры измерений,
 формирующих координату куба. По измерениями предварительно выставлена
 отметка. Также передаётся выражение формулы. В ответе приходит признак
 удачного изменения формулы.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetCalculatedCubeFormulas xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimIds>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S2</id>  </dimId>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S3</id>  </dimId>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<dimId>
  <id>S1!M!S!S4</id>  </dimId>
  </it>
  </its>
  </dimIds>
[![](../../minus.gif)](../../#)<formulas>
[![](../../minus.gif)](../../#)<formula>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <expression>CUBE_SOURCE[0,0,7]</expression>  </it>
  </its>
  </formula>
  </formulas>
  </it>
  </its>
  </tArg>
  </SetCalculatedCubeFormulas>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetCalculatedCubeFormulasResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetCalculatedCubeFormulasResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCalculatedCubeFormulas" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "dimIds" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S2"
                    }
                  },
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S3"
                    }
                  },
                  {
                   "dimId" :
                    {
                     "id" : "S1!M!S!S4"
                    }
                  }
                ]
              }
            },
           "formulas" :
            {
             "formula" :
              [
                {
                 "its" :
                  {
                   "it" :
                    [
                      {
                       "expression" : "CUBE_SOURCE[0,0,7]"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetCalculatedCubeFormulasResult" : "1"
}


public static bool SetCalcCubeFormulas(CubeId moniker, OpenId[] dimMonikers)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetCalculatedCubeFormulas()
    {
        tArg = new SetCalculatedCubeFormulasRes()
        {
            its = new GetCalculatedCubeCoordFormula[]
            {
                new GetCalculatedCubeCoordFormula()
                {
                    dimIds = new OpenIds()
                    {
                        its = dimMonikers
                    },
                    formulas = new CalculatedCubeFormulas()
                    {
                        formula = new CltCubeFormulas()
                        {
                            its = new CalculatedCubeFormula[]
                            {
                                new CalculatedCubeFormula()
                                {
                                    expression = "CUBE_SOURCE[0,0,7]"
                                }
                            }
                        }
                    }
                }
            }
        },
        tCube = moniker
    };
    //Изменение формул вычисляемого куба
    var result = somClient.SetCalculatedCubeFormulas(tSet);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
