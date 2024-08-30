'use client'

import { useState } from 'react'

import {
    Card,
    Grid,
    GridItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from '@chakra-ui/react'
import {
    ErrorPage,
    Page,
    PageBody,
    PageHeader,
    Toolbar,
    ToolbarButton,
} from '@saas-ui-pro/react'
import { useQuery } from '@tanstack/react-query'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'

import { useWorkspace } from '@app/features/common/hooks/use-workspace'

import { getDashboard } from '@api/client'

import {
    DateRange,
    DateRangePicker,
    DateRangePresets,
    SegmentedControl,
    getRangeDiff,
    getRangeValue,
} from '@ui/lib'

import { IntroTour } from '../features/organizations/components/intro-tour'
import { Activity } from '../features/organizations/components/metrics/activity'
import { Metric } from '../features/organizations/components/metrics/metric'
import { RevenueChart } from '../features/organizations/components/metrics/revenue-chart'
import { SalesByCountry } from '../features/organizations/components/metrics/sales-by-country'

export function DashboardPage() {
    const workspace = useWorkspace()

    const [range, setRange] = useState('30d')
    const [dateRange, setDateRange] = useState(getRangeValue('30d'))
    const onPresetChange = (preset: string) => {
        if (preset !== 'custom') {
            setDateRange(getRangeValue(preset as DateRangePresets))
        }
        setRange(preset)
    }

    const onRangeChange = (range: DateRange) => {
        const diff = getRangeDiff(range)
        if ([1, 3, 7, 30].includes(diff)) {
            setRange(`${diff}`)
        } else {
            setRange('custom')
        }

        setDateRange(range)
    }

    const { data, isLoading } = useQuery({
        queryKey: [
            'dashboard',
            {
                workspace,
                startDate: dateRange.start.toString(),
                endDate: dateRange.end.toString(),
            },
        ] as const,
        queryFn: ({ queryKey }) => getDashboard(queryKey[1]),
        enabled: !!workspace,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    })

    const toolbar = (
        <Toolbar className="overview-toolbar" variant="ghost">
            <ToolbarButton
                as="a"
                href="https://twitter.com/intent/tweet?text=Check%20out%20%40saas_js,%20an%20advanced%20component%20library%20for%20SaaS%20products%20build%20with%20%40chakra_ui.%20https%3A//saas-ui.dev%20"
                icon={<FaTwitter />}
                label="Share on Twitter"
            />
            <ToolbarButton
                as="a"
                href="https://github.com/saas-js/saas-ui"
                icon={<FaGithub />}
                label="Star on Github"
            />
            <ToolbarButton
                as="a"
                href="https://discord.gg/4PmJGFcAjX"
                icon={<FaDiscord />}
                label="Join Discord"
            />
            <ToolbarButton
                as="a"
                href="#"
                label="Connect Wallet"
                colorScheme="primary"
                variant="solid"
                className="pre-order"
            />
        </Toolbar>
    )

    const footer = (
        <Toolbar justifyContent="flex-start" variant="secondary" size="xs">
            <SegmentedControl
                size="xs"
                segments={[
                    {
                        id: '1d',
                        label: '1d',
                    },
                    {
                        id: '3d',
                        label: '3d',
                    },
                    {
                        id: '7d',
                        label: '7d',
                    },
                    { id: '30d', label: '30d' },
                    { id: 'custom', label: 'Custom' },
                ]}
                value={range}
                onChange={onPresetChange}
            />
            <DateRangePicker value={dateRange} onChange={onRangeChange} />
        </Toolbar>
    )

    return (
        <Page isLoading={isLoading}>
            <PageHeader
                title="My Dashboard"
                toolbar={toolbar}
            />
            <PageBody
                contentWidth="container.2xl"
                bg="page-body-bg-subtle"
                py={{ base: 4, xl: 8 }}
                px={{ base: 4, xl: 8 }}
            >
                <IntroTour />
                <Grid
                    templateColumns={['repeat(1, 1fr)', null, null, 'repeat(2, 1fr)']}
                    gridAutoColumns="fr1"
                    width="100%"
                    gap={{ base: 4, xl: 8 }}
                    pb="8"
                >

                </Grid>
            </PageBody>
        </Page>
    )
}
